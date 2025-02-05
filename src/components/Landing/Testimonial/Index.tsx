import clsx from "clsx";
import styles from "./Styles.module.scss";
import QuoteIcon from "@/assets/icons/quote-icon.svg";
import { useState } from "react";
import { motion } from "framer-motion";

const testimonies = [
  {
    id: 1,
    name: "James Alimo",
    title: "CEO, Perpertuals",
    testimony:
      " Lite Pay has been a game-changer for me when it comes to sending money across borders. The platform is user-friendly, and I can easily make bulk payments to multiple recipients with just a few clicks. I appreciate the low transfer fees and the fast payout feature, which saves me time and money. Most importantly, the security and privacy of my personal and financial information are guaranteed. I highly recommend Lite Pay to anyone looking for a reliable and efficient way to transfer money across borders.",
    image: "https://xsgames.co/randomusers/avatar.php?g=male&1",
  },
  {
    id: 2,
    name: "Philip Lahm",
    title: "CEO, Amazon",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem inventore nobis nam molestiae atque assumenda ipsum sequi. Dicta beatae deserunt iusto inventore laudantium quasi suscipit sint fuga aliquid, cupiditate, accusantium dolorem hic ratione a odio mollitia temporibus, dolores soluta officia magni? Facere sint ipsa dolor ut ea soluta. Praesentium quod dicta hic eos est voluptas maxime culpa dolor optio? Laborum.",
    image: "https://xsgames.co/randomusers/avatar.php?g=male&2",
  },
  {
    id: 3,
    name: "Barack Obama",
    title: "President, United States",
    testimony:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem inventore nobis nam molestiae atque assumenda ipsum sequi. Dicta beatae deserunt iusto inventore laudantium quasi suscipit sint fuga aliquid, cupiditate, accusantium dolorem hic ratione a odio mollitia temporibus, dolores soluta officia magni? Facere sint ipsa dolor ut ea soluta. Praesentium quod dicta hic eos est voluptas maxime culpa dolor optio? Laborum.",
    image: "https://xsgames.co/randomusers/avatar.php?g=male&3",
  },
];

const slideInVariant = {
  initial: { x: "-100%", opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" },
};
export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleSelectTestimony = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div id="testimonials" className="relative p-3 md:p-8 pb-10">
      <div className="md:container mx-auto w-full xl:w-[70%] p-thin md:p-medium flex flex-col justify-center">
        <div className="text-center space-y-2">
          <a
            href="#"
            className=" text-lg text-brand-400 font-semibold hover:text-brand-600 cursor-default"
          >
            Testimonials
          </a>
          <h3 className=" text-2xl md:text-4xl font-semibold text-brand-900">
            What Our Customers Say
          </h3>
        </div>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          transition={slideInVariant.transition}
          variants={slideInVariant}
          className={clsx(
            "relative p-normal-lite md:p-medium-lite mt-7",
            styles.testimony
          )}
        >
          <div className="relative">
            <QuoteIcon className="mb-5" />
            <p className=" text-sm md:text-lg leading-relaxed text-dark-500">
              {testimonies[activeIndex].testimony}
            </p>
            <p className="mt-4 font-bold text-dark-900">
              {testimonies[activeIndex].name}
            </p>
            <p className="text-sm text-[#737373]">
              {testimonies[activeIndex].title}
            </p>
          </div>
          <div className="flex justify-center space-x-3 mt-6">
            {testimonies.map((_, index) => (
              <button
                key={index}
                onClick={() => handleSelectTestimony(index)}
                className={clsx(
                  "w-3 h-3 rounded-full",
                  index === activeIndex ? "bg-brand" : "bg-dark-50"
                )}
              ></button>
            ))}
          </div>
          <motion.img
            key={testimonies[activeIndex].image}
            src={testimonies[activeIndex].image}
            alt={testimonies[activeIndex].name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute -bottom-[2rem] right-[2rem] h-[4rem] w-[4rem] rounded-full md:w-[6rem] md:h-[6rem] md:right-[6rem]"
          />
        </motion.div>
      </div>
    </div>
  );
}
