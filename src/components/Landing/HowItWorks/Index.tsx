import clsx from "clsx";
import styles from "./Styles.module.scss";
import Curls1 from "@/assets/vectors/curls-1.svg";
import Curls2 from "@/assets/vectors/curls-2.svg";

const howItWorks = [
  {
    number: "1",
    title: "Create an Account",
    content:
      "Get started with Lite Pay today by creating your account!. Sign up on Lite Pay now and experience seamless and secure transactions.",
  },
  {
    number: "2",
    title: "Complete Your KYC",
    content:
      "Safeguard your transactions and access our platform's full potential by completing your KYC.",
  },
  {
    number: "3",
    title: "Send Money",
    content:
      "Simply select the destination country of your recipient and transfer funds swiftly and securely. Enjoy savings on fees with fast international transfers. ",
  },
];

export default function HowItWorks() {
  return (
    <div id="how-it-works" className="relative p-3 md:p-8 pb-20">
      <Curls2 className={styles.curls2} />
      <div className=" md:container mx-auto w-full p-thin md:p-medium flex flex-col justify-center">
        <div className="text-center space-y-2">
          <a
            href="#"
            className=" text-lg text-brand-400 font-semibold hover:text-brand-600 cursor-default"
          >
            How it works
          </a>
          <h3 className=" text-2xl md:text-4xl font-semibold text-brand-900">
            Get Started in 3 Simple Steps
          </h3>
        </div>
        <div className="relative grid justify-center gap-x-[3rem] lg:grid-cols-3">
          {howItWorks.map((step, index) => (
            <div
              key={index}
              className={clsx(
                "relative w-full z-10 mx-auto mt-10 lg:mt-20 py-12 space-y-3 px-5 md:px-10 flex flex-col items-center justify-center bg-white",
                styles.stepBoxes
              )}
            >
              <div
                className={clsx(
                  "relative flex justify-center items-center text-center mx-auto w-10 h-10 md:h-[4rem] md:w-[4rem] rounded-full bg-brand-400 text-[1.5rem] md:text-[3rem] font-bold text-white",
                  styles.stepNumbers
                )}
              >
                {step.number}
              </div>
              <h4 className="text-xl font-bold text-brand-900">{step.title}</h4>
              <p className="text-center">{step.content}</p>
            </div>
          ))}
        </div>
      </div>
      <Curls1 className={styles.curls1} />
    </div>
  );
}
