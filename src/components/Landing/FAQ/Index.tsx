import SvgIcon from "@/components/General/SvgIcon/SvgIcon";
import faqs from "@/constants/faqs";

import { useState } from "react";
export default function FAQ() {
  const [active, setActive] = useState<number | null>(null);
  const toggle = (i: number) => {
    if (active === i) {
      setActive(-1);
    } else {
      setActive(i);
    }
  };
  return (
    <div id="faqs" className="relative p-3 md:p-8 pb-10 bg-[#F5F6FA]">
      <div className="md:container mx-auto mt-5 w-full p-thin md:p-medium flex flex-col justify-center relative z-20">
        <div className="mx-auto flex flex-col justify-center items-center text-center space-y-2">
          <h3 className="text-xl md:text-4xl font-semibold text-brand-900 w-3/4">
            Frequently Asked Questions
          </h3>
          <p className="text-sm text-center font-normal text-[#555555]">
            We have provided you with detailed guide and answers to most
            pressing questions
          </p>
        </div>
        <div className="mt-7 p-thin bg-white space-y-7 md:p-medium rounded-[32px]">
          {faqs.map((faq) => (
            <div key={faq.id} className=" overflow-hidden">
              <div
                className="flex justify-between items-center bg-[#F5F6FA] p-5 rounded-[24px] z-10"
                onClick={() => toggle(faq.id)}
              >
                <h4
                  className={`text-sm md:text-base font-semibold ${
                    active === faq.id ? "text-brand-900" : "text-gray-700"
                  }`}
                >
                  {faq.question}
                </h4>
                <button className="">
                  <SvgIcon
                    name={`chevron-${active === faq.id ? "down" : "up"}`}
                    className={`text-lg ${
                      active === faq.id ? "text-brand-900" : "text-gray-500"
                    }`}
                  />
                </button>
              </div>
              {active === faq.id && (
                <div className="bg-[#F5F6FA] p-5 -mt-4 rounded-b-[24px]">
                  <p
                    className="text-sm md:text-base text-gray-700"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  ></p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
