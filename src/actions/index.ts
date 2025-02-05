"use server";

import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import { ContactFormType, ContactFormErrorType } from "@/lib/types";
import { mail } from "@/lib/mail";
import { z } from "zod";

// Initialize Firebase
const app = initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
});

const db = getFirestore(app);

const schema = z.object({
    email: z.coerce.string().email()
});

export async function storeContactFormData(data: ContactFormType) {
    await addDoc(collection(db, "contacts"), data);

    mail({
        to: process.env.ADMIN_EMAIL,
        from: data.email?.toString(),
        subject: `New Contact form submission on Lite Pay Landing Page`,
        html: `
            <h1>Name: ${data.name}</>
            <h1>Subject: ${data.subject}</>
            <p>${data.message}</p>
        `
    });

    return {
        message: "Awesome! Thank you for contacting us. We'll be in touch",
        success: true,
        errors: {} as ContactFormErrorType
    };
}

export async function addToWaitList(prevState: any, formData: FormData) {
    try {
        const email = formData.get("email");
        const validatedFields = schema.safeParse({ email });
        if (!validatedFields.success) {
            return {
                message: "Invalid email address.",
                success: false
            };
        }
        const waitListRef = collection(db, "waitlist");
        const q = query(waitListRef, where("email", "==", email?.toString()));
        const listSnapshot = await getDocs(q);

        if (!listSnapshot.empty) {
            return {
                message: "You're already in our waitlist. We will keep you updated.",
                success: true
            };
        }
        const docRef = await addDoc(collection(db, "waitlist"), {
            email,
            createdAt: new Date()
        });

        return {
            message: "Awesome! You're in! We will keep you updated.",
            success: true
        };
    }
    catch (error) {
        console.error("Error adding email to list:", error);
        return {
            message:
                "An error occurred while adding your email to our waitlist. Please try again later.",
            success: false
        };
    }
}
