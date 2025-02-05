import clsx from "clsx";
import { useRef } from "react";
import { useFormState } from "react-dom";

import { addToWaitList } from "@/actions";
import SubmitButton from "@/components/General/SubmitButton/Index";
import styles from "./Styles.module.scss";
import Link from "next/link";
import SvgIcon from "@/components/General/SvgIcon/SvgIcon";

const quickLinks = [
  { title: "About", id: "#about-us" },
  { title: "How it Works", id: "#how-it-works" },
  { title: "Testimonials", id: "#testimonials" },
  { title: "Faqs", id: "#faqs" },
  { title: "Contact", id: "#contact" },
];

const socialIcons = [
  {
    name: "instagram",
    link: "https://www.instagram.com/ruthiejay022/",
  },
  {
    name: "facebook",
    link: "https://web.facebook.com/profile.php?id=100070651203066",
  },
  {
    name: "twitter",
    link: "https://x.com/Ruthiejay2",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/ruth-james-685760222/",
  },
];

const initialState = {
  message: "",
  success: false,
};

export default function Footer() {
  const [state, formAction] = useFormState(addToWaitList, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  if (formRef.current && state.success) {
    formRef.current.reset();
  }
  return (
    <div className="relative p-3 md:p-8 md:py-10 bg-white">
      <div className="md:container my-5 mx-auto ">
        <div className="grid gap-x-[1.5rem] lg:gap-x-[3rem] gap-y-small md:grid-cols-[5fr,2fr,5fr,4fr]">
          <div className="space-y-5">
            <h3 className="text-2xl font-bold text-brand-500">Lite Pay</h3>
            <p className="text-md">
              Trust Swifia to simplify your financial management and empower
              your business to succeed on a global scale
            </p>
          </div>
          <div>
            <h2 className=" mb-3 font-semibold text-brand-900 md:mb-10 md:mt-0">
              Quick Links
            </h2>
            <div className="flex flex-col">
              {quickLinks.map((link, index) => (
                <Link
                  href={link.id}
                  className="cursor-pointer text-[1rem]"
                  key={index}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <h2 className="font-semibold text-brand-900 md:mb-10 md:mt-0">
              Subscribe To Our Newsletter
            </h2>
            <p className="text-md">
              Join our mailing list and receive regular updates on exclusive
              offers, new features, and industry insights.
            </p>
            <div className={styles.newsletterInputWrap}>
              <form ref={formRef} action={formAction}>
                <input
                  name="email"
                  type="text"
                  placeholder="Type your email..."
                />
                <SubmitButton >Subscribe</SubmitButton>
              </form>
            </div>
            {state.message && (
              <p
                className={clsx(
                  styles.ctaMessage,
                  state.success ? styles.success : styles.error
                )}
              >
                {state.message}
              </p>
            )}
          </div>
          <div className="space-y-5">
            <h2 className="font-semibold text-brand-900 md:mb-10 md:mt-0">
              Get Social
            </h2>
            <p className="text-md">
              Engage with our community, share your thoughts, and get the latest
              updates instantly.
            </p>
            <div className="space-x-4">
              {socialIcons.map((icon, index) => (
                <Link href={icon.link} target="_blank" key={index}>
                  <SvgIcon name={icon.name} className="text-xl" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 mt-[4rem]">
        <h2 className=" mt-3 md:text-center">
          Lite Pay &copy; {new Date().getFullYear()} . All Rights Reserved.
        </h2>
      </div>
    </div>
  );
}
