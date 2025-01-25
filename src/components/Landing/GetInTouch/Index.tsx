import clsx from "clsx";
import { z } from "zod";
import { useState, useRef } from "react";

import { storeContactFormData } from "@/actions";
import { ContactFormErrorType } from "@/lib/types";
import styles from "./Style.module.scss";
import SvgIcon from "@/components/General/SvgIcon/SvgIcon";
import SubmitButton from "@/components/General/SubmitButton/Index";

const contactInformation = [
  {
    contact: "+2347083114092",
    icon: "whatsapp",
    action: (): void => {
      window.location.href = "https://wa.me/+2347048004111";
    },
  },
  {
    contact: "+2347083114092",
    icon: "call",
    action: (): void => {
      window.location.href = "tel:" + "+2347048004111";
    },
  },
  {
    contact: "ruthiejay022@gmail.com",
    icon: "sms",
    action: (): void => {
      window.location.href = "mailto:" + "ruthiejay022@gmail.com";
    },
  },
];

const schema = z.object({
  email: z.coerce.string().email(),
  name: z.coerce.string().min(1, "name field is required"),
  subject: z.coerce.string().min(1, "subject field is required"),
  message: z.coerce.string().min(1, "message field is required"),
});

export default function GetInTouch() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, setState] = useState<{
    loading: boolean;
    success: boolean;
    errors: ContactFormErrorType | null;
    message: string;
  }>({
    loading: false,
    success: false,
    errors: null,
    message: "",
  });

  const submitContactForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState({ ...state, loading: true, success: false, errors: null });

    const formData = new FormData(formRef.current as HTMLFormElement);
    const payload = Object.fromEntries(formData.entries());

    const validatedFields = schema.safeParse(payload);

    if (!validatedFields.success) {
      setState({
        ...state,
        loading: false,
        success: false,
        errors: validatedFields.error.flatten().fieldErrors,
      });
      return;
    }

    try {
      await storeContactFormData({
        ...validatedFields.data,
        createdAt: new Date(),
      });
      setState({
        ...state,
        loading: false,
        success: true,
        message: "Awesome! Thank you for contacting us. We'll be in touch.",
      });
      if (formRef.current) formRef.current.reset();
    } catch (err) {
      console.error(err);
      setState({
        ...state,
        loading: false,
        success: false,
        message: "Failed to submit the form. Please try again.",
      });
    }
  };

  return (
    <div id="contact" className="relative py-7 md:p-8 md:py-16 bg-[#F3F2FC]">
      <div className="md:container bg-brand-900 mx-auto mt-5 rounded-thin w-full p-thin md:p-medium relative z-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col self-center space-y-4 text-white">
            <h3 className="text-[1.5rem] md:text-[3rem] font-bold">
              Get In Touch
            </h3>
            <p className="text-sm md:text-base">
              Have a question or need help? Contact us today and our friendly
              customer support team will be happy to assist you. We're available
              24/7 to answer any questions or concerns you may have, and we're
              committed to providing you with the best possible experience.
            </p>
            <div className="space-y-3">
              {contactInformation.map((info, index) => (
                <div
                  key={index}
                  className="flex space-x-3 items-center cursor-pointer hover:opacity-80"
                  onClick={info.action}
                >
                  <SvgIcon name={info.icon} className="text-md md:text-lg" />
                  <p className="text-sm">{info.contact}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-small border border-dark-50 bg-dark-50 bg-opacity-[0.04] px-4 py-small md:py-medium-lite md:px-small">
            <form
              ref={formRef}
              onSubmit={submitContactForm}
              className="space-y-6"
            >
              <div className="grid gap-thin md:grid-cols-2 md:gap-small">
                <div className="block space-y-2">
                  <label htmlFor="name" className="text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className={clsx(
                      styles.formInput,
                      "block w-full rounded-lg py-3 px-2 text-white placeholder:text-white placeholder:text-opacity-50 focus:border-white"
                    )}
                    placeholder="Enter name"
                  />
                  {state.errors?.name && (
                    <p className="text-red-500">{state.errors.name}</p>
                  )}
                </div>
                <div className="block space-y-2">
                  <label htmlFor="email" className="text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={clsx(
                      styles.formInput,
                      "block w-full rounded-lg py-3 px-2 text-white placeholder:text-white placeholder:text-opacity-50 focus:border-white"
                    )}
                    placeholder="Enter email"
                  />
                  {state.errors?.email && (
                    <p className="text-red-500">{state.errors.email}</p>
                  )}
                </div>
              </div>
              <div className="block space-y-2">
                <label htmlFor="subject" className="text-white">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter subject"
                  className={clsx(
                    styles.formInput,
                    "block w-full rounded-lg py-4 px-2 text-normal text-white placeholder:text-white placeholder:text-opacity-50 focus:border-white"
                  )}
                />
                {state.errors?.subject && (
                  <p className="text-red-500">{state.errors.subject}</p>
                )}
              </div>
              <div className="block space-y-2">
                <label htmlFor="message" className="text-white">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols={3}
                  className={clsx(
                    styles.formInput,
                    "block w-full h-[10rem] rounded-lg py-4 px-2 text-normal text-white placeholder:text-white placeholder:text-opacity-50 focus:border-white"
                  )}
                  placeholder="Enter message"
                ></textarea>
                {state.errors?.message && (
                  <p className="text-red-500">{state.errors.message}</p>
                )}
              </div>
              <SubmitButton className="bg-white py-3 px-6 rounded-3xl hover:text-white hover:bg-brand">
                {state.loading ? "Sending..." : "Send Message"}
              </SubmitButton>
              {state.success && (
                <p className="text-green-500">{state.message}</p>
              )}
              {!state.success && state.message && (
                <p className="text-red-500">{state.message}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
