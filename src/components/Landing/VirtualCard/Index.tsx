import clsx from "clsx";
import styles from "./Styles.module.scss";

import InfoBgImg1 from "@/assets/vectors/info-bg-1.svg";
import InfoBgImg2 from "@/assets/vectors/info-bg-2.svg";
import SubmitButton from "@/components/General/SubmitButton/Index";

const AppUsageInfo = [
  {
    title: "Get paid by foreign employers and clients",
    content:
      "Expand your horizons and get paid by foreign employers and clients. With our secure payment system, you can easily receive payments from around the world. Join now and start earning globally!",
  },
  {
    title: "Instant currency exchange",
    content:
      "No more waiting for currency exchange! Our instant currency exchange service lets you convert your funds hassle-free. With competitive rates and no hidden fees, you'll get the best value for your money",
  },
  {
    title: "Send and receive money quickly",
    content:
      "Sending and receiving money has never been this easy! With our lightning-fast service, you can securely transfer funds to anyone, anywhere in the world. Say goodbye to long wait times and hello to instant transactions on Swifia.",
  },
];

export default function VirtualCard() {
  return (
    <div className="relative p-3 md:p-8 pb-10 ">
      <InfoBgImg1 className={styles.infoBgImg1} />
      <div className=" md:container mx-auto mt-5 w-full p-thin md:p-medium flex flex-col justify-center relative z-20">
        <div className="mx-auto flex justify-center items-center text-center space-y-2">
          <h3 className="text-xl md:text-4xl font-semibold text-brand-900 md:w-4/6">
            Create free USD, GBP and EUR accounts for all your international
            transactions
          </h3>
        </div>
        <div className="my-6 flex flex-col gap-x-6 md:grid lg:grid-cols-3">
          {AppUsageInfo.map((info, index) => (
            <div
              className="my-4 flex flex-col gap-[0.8rem] rounded-[1.6rem] bg-[#F5F6FA] px-[2.4rem] py-[1.6rem]"
              key={index}
            >
              <h2 className="text-lg md:text-xl font-medium">{info.title}</h2>
              <p className="text-justify">{info.content}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <SubmitButton className="px-10 md:px-20 py-2 rounded-3xl bg-brand text-white hover:bg-brand-700">
            Create an Account
          </SubmitButton>
        </div>
      </div>
      <InfoBgImg2 className={styles.infoBgImg2} />
    </div>
  );
}
