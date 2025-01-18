import clsx from "clsx";
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

export default function GetInTouch() {
  return (
    <div id="contact" className="relative p-3 md:p-8 pb-10 bg-[#F3F2FC]">
      <div className="md:container bg-brand-900 mx-auto mt-5 rounded-thin w-full p-thin md:p-medium relative z-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col self-center space-y-4 text-white">
            <h3 className="text-[1.5rem] md:text-[3rem] font-bold">Get In Touch</h3>
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
            <form action="" className="space-y-6">
              <div className="grid gap-thin md:grid-cols-2 md:gap-small">
                <div className="block space-y-2">
                  <label htmlFor="name" className="text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    name=""
                    id=""
                    className={clsx(
                      styles.formInput,
                      "block w-full rounded-lg py-3 px-2 text-white placeholder:text-white placeholder:text-opacity-50 focus:border-white"
                    )}
                    placeholder="Enter name"
                  />
                </div>
                <div className="block space-y-2">
                  <label htmlFor="email" className="text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name=""
                    id=""
                    className={clsx(
                      styles.formInput,
                      "block w-full rounded-lg py-3 px-2 text-white placeholder:text-white placeholder:text-opacity-50 focus:border-white"
                    )}
                    placeholder="Enter email"
                  />
                </div>
              </div>
              <div className="block space-y-2">
                <label htmlFor="subject" className="text-white">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  className={clsx(
                    styles.formInput,
                    "block w-full rounded-lg py-4 px-2 text-normal text-white placeholder:text-white placeholder:text-opacity-50 focus:border-white"
                  )}
                />
              </div>
              <div className="block space-y-2">
                <label htmlFor="message" className="text-white">
                  Message
                </label>
                <textarea
                  name=""
                  id=""
                  cols={3}
                  className={clsx(styles.formInput, "block w-full h-[10rem] rounded-lg py-4 px-2 text-normal text-white placeholder:text-white placeholder:text-opacity-50 focus:border-white")}
                  placeholder="Enter message"
                ></textarea>
              </div>
              <SubmitButton className="bg-white py-3 px-6 rounded-3xl hover:text-white hover:bg-brand">Send Message</SubmitButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
