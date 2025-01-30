import styles from "./Styles.module.scss";
import SubmitButton from "@/components/General/SubmitButton/Index";

import AboutEclipse1 from "@/assets/vectors/about-eclipse-1.svg";
import AboutEclipse2 from "@/assets/vectors/about-eclipse-2.svg";
import AboutYen from "@/assets/vectors/about-yen.svg";
import AboutDollar from "@/assets/vectors/about-dollar.svg";

import { delay, motion } from "framer-motion";

const slideInVariant = {
  initial: { y: "100%", opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" },
};

export default function About() {
  return (
    <div id="about-us" className="relative p-3 md:p-8 pb-10 bg-background">
      <div className={styles.topBgImg}>
        <AboutEclipse1 className={styles.aboutEclipse1} />
        <AboutYen className={styles.aboutYen} />
      </div>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
        transition={slideInVariant.transition}
        variants={slideInVariant}
        className="relative p-5 lg:px-[10rem] lg:py-[4rem] z-30"
      >
        <div className=" md:container mx-auto bg-white p-8 md:p-[4.8rem] rounded-small md:rounded-medium-lite ">
          <h2 className=" text-2xl md:text-[36px] font-semibold text-brand-900 my-3 ">
            About Lite Pay
          </h2>
          <p className="text-sm md:text-lg md:w-11/12">
            <span className="my-5 block">
              <span className="font-semibold text-brand-500">Lite Pay</span> is
              a leading financial platform that is passionate about making
              global banking services accessible and affordable for businesses
              and individuals in Africa and beyond. With a deep understanding of
              the challenges that our customers face in the ever-evolving
              financial landscape, we are committed to providing fast, secure
              and reliable financial solutions that meet their needs.
            </span>
            <span className="my-5 block">
              Our team comprises professionals from diverse backgrounds, with
              expertise in finance, technology, and customer service. We are
              united by a common goal of driving financial inclusion, promoting
              economic growth and delivering value to our customers.
            </span>
            <span className="my-5 block">
              At Lite Pay, we believe that the success of our customers is our
              success, and we go the extra mile to ensure that they receive the
              best possible service. Our commitment to excellence is reflected
              in everything we do, from our cutting-edge technology to our
              friendly customer support team. Join us today and discover why
              Lite Pay is the go-to financial partner for businesses and
              individuals seeking global banking services that are fast, secure
              and affordable.
            </span>
          </p>
          <SubmitButton className="md:mt-4 px-4 py-2 md:px-7 rounded-3xl bg-brand-500 text-white">
            Create an Account
          </SubmitButton>
        </div>
      </motion.div>
      <div className={styles.bottomBgImg}>
        <AboutEclipse2 className={styles.aboutEclipse2} />
        <AboutDollar className={styles.aboutDollar} />
      </div>
    </div>
  );
}
