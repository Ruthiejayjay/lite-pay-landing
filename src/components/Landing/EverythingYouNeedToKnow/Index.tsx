import clsx from "clsx";
import { motion } from "framer-motion";
import styles from "./Styles.module.scss";
import SvgIcon from "@/components/General/SvgIcon/SvgIcon";
import EverythingBgImg1 from "@/assets/vectors/everything-bg-1.svg";
import EverythingBgImg2 from "@/assets/vectors/everything-bg-2.svg";

const everythingYouNeedToKnow = [
  {
    title: "Fast Payouts",
    content:
      "Our platform ensures that you receive your payouts in a timely and efficient manner. Experience the convenience of fast payouts with us today!",
    icon: "star-checkmark",
  },
  {
    title: "Low Transfer Fee",
    content:
      "Trust us to provide you with an affordable way to transfer money across borders, making it easier for you to manage your finances.",
    icon: "wallet",
  },
  {
    title: "Private and Secure",
    content:
      "We keep your personal and financial information secure using robust encryption technologies and round-the-clock threat monitoring, giving you peace of mind.",
    icon: "card",
  },
];

const slideInVariant = {
  initial: { x: "100%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" },
 }
export default function EverythingYouNeedToKnow() {
  return (
    <div className="relative p-3 md:p-8 pb-10 bg-background">
      <EverythingBgImg1 className={styles.everythingBgImg1}/>
      <div className="md:container mx-auto mt-5 w-full p-thin md:p-medium flex flex-col justify-center relative z-20">
        <div className="mx-auto flex justify-center items-center text-center space-y-2">
          <h3 className="text-xl md:text-4xl font-semibold text-brand-900 w-3/4">
            Everything You Need To Send Money Conveniently
          </h3>
        </div>
        <div className="my-5 flex flex-col gap-5 lg:flex-row">
          {everythingYouNeedToKnow.map(({ title, content, icon }, index) => (
            <motion.div
            key={index}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            variants={slideInVariant}
            transition={{ ...slideInVariant.transition, delay: index * 0.1 }}
              className={clsx(
                "flex flex-col items-center p-12 rounded-[1.6rem] text-center space-y-2 bg-white",
                styles.itemsContent
              )}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#F5F6FA]">
                <SvgIcon name={icon} className={clsx("text-2xl text-brand-400", styles.icon)}/>
              </div>
              <h2 className=" text-xl font-semibold text-dark-500">{title}</h2>
              <p>{content}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <EverythingBgImg2 className={styles.everythingBgImg2}/>
    </div>
  );
}
