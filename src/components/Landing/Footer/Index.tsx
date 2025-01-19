import clsx from "clsx";
import SubmitButton from "@/components/General/SubmitButton/Index";
import styles from "./Styles.module.scss"
import Link from "next/link";

const quickLinks = [
  { title: "About", id: "#about-us" },
  { title: "How it Works", id: "#how-it-works" },
  { title: "Testimonials", id: "#testimonials" },
  { title: "Faqs", id: "#faqs" },
  { title: "Contact", id: "#contact" },
];

export default function Footer() {
  return (
    <div className="relative p-3 md:p-8 md:py-10 bg-white">
      <div className="md:container my-5 mx-auto ">
        <div className="grid gap-x-[3rem] gap-y-small md:grid-cols-[5fr,2fr,5fr,4fr]">
          <div>
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
            <div className={clsx(styles.newsletterBox, "max-w-60 md:max-w-72 border bg-background rounded-full")}>
              <form action="" className="flex items-center">
                <input
                  type="text"
                  placeholder="Enter email"
                  className="p-2 pl-4 bg-transparent focus:outline-none"
                />
                <SubmitButton className="bg-brand-900 py-2 px-6 text-white rounded-full -ml-20">
                  Submit
                </SubmitButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
