import SvgIcon from "@/components/General/SvgIcon/SvgIcon";

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
        <div className="flex">
          <div className="space-y-4 text-white">
            <h3>Get In Touch</h3>
            <p className="text-sm">
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
                  <SvgIcon name={info.icon} className="text-md" />
                  <p className="text-sm">{info.contact}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-small "></div>
        </div>
      </div>
    </div>
  );
}
