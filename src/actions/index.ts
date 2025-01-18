"use server";

import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { ContactFormType, ContactFormErrorType } from "@/lib/types";
import { mail } from "@/lib/mail";

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


