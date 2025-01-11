import SubmitButton from "@/components/General/SubmitButton/Index";
import clsx from "clsx";
import styles from "./Styles.module.scss";
import SvgIcon from "@/components/General/SvgIcon/SvgIcon";

import { useState, useEffect } from "react";

interface Currency {
  name: string;
  title: string;
  currency_code: string;
  flag: string;
  sign: string;
}

const actions = [
  { title: "Contact Us", filled: false },
  { title: "Get Started", filled: true },
];

const currencies: Currency[] = [
  {
    name: "Nigeria",
    title: "NGN",
    currency_code: "NGN",
    flag: "https://flagcdn.com/w320/ng.png",
    sign: "₦",
  },
  {
    name: "United States",
    title: "USD",
    currency_code: "USD",
    flag: "https://flagcdn.com/w320/us.png",
    sign: "$",
  },
  {
    name: "United Kingdom",
    title: "GBP",
    currency_code: "GBP",
    flag: "https://flagcdn.com/w320/gb.png",
    sign: "£",
  },
  {
    name: "European Union",
    title: "EUR",
    currency_code: "EUR",
    flag: "https://flagcdn.com/w320/eu.png",
    sign: "€",
  },
];

const transferStatusTemplate = [
  {
    title: "Fee",
    value: "",
    icon: "",
  },
  {
    title: "Transfer Time",
    value: "within 24 hours",
    icon: "info-circle",
  },
];

export default function Header() {
  const [baseCurrency, setBaseCurrency] = useState<Currency>(currencies[0]);
  const [targetCurrency, setTargetCurrency] = useState<Currency>(currencies[1]);
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [sendAmount, setSendAmount] = useState<number | string>(0);
  const [recipientAmount, setRecipientAmount] = useState<number | string>(0);
  const [transferStatus, setTransferStatus] = useState(transferStatusTemplate);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeField, setActiveField] = useState<"send" | "recipient" | null>(
    null
  );
  const [selectedSendCurrency, setSelectedSendCurrency] = useState(
    currencies[1]
  );
  const [selectedRecipientCurrency, setSelectedRecipientCurrency] = useState(
    currencies[2]
  );

  const toggleModal = (field: "send" | "recipient") => {
    setActiveField(field);
    setIsModalOpen(!isModalOpen);
  };

  const handleCurrencySelect = (currency: (typeof currencies)[0]) => {
    if (activeField === "send") {
      setSelectedSendCurrency(currency);
    } else if (activeField === "recipient") {
      setSelectedRecipientCurrency(currency);
    }
    setIsModalOpen(false);
  };

  const fetchExchangeRate = async (base: string, target: string) => {
    const endpoint = `https://v6.exchangerate-api.com/v6/b6475ae733062b43f7189d83/latest/${base}`;
    try {
      const response = await fetch(endpoint);
      const data = await response.json();

      if (data.result !== "success" || !data.conversion_rates) {
        throw new Error(data.error || "Invalid API response");
      }

      const rate = data.conversion_rates[target.toUpperCase()];
      if (!rate) {
        throw new Error(`No exchange rate found for currency: ${target}`);
      }

      setExchangeRate(rate);

      // Update recipient amount automatically if sendAmount is entered
      if (typeof sendAmount === "number") {
        setRecipientAmount((sendAmount * rate).toFixed(2));
      }
    } catch (error) {
      console.error("Failed to fetch exchange rate:", error);
      setExchangeRate(null);
    }
  };
  const calculateFee = (amount: number): number => {
    return amount * 0.02; // 2% of sendAmount
  };

  const handleSendAmountChange = (value: string) => {
    const amount = parseFloat(value.replace(/,/g, ""));
    setSendAmount(isNaN(amount) ? "" : amount);

    if (!isNaN(amount)) {
      // Update recipient amount
      if (exchangeRate) {
        setRecipientAmount((amount * exchangeRate).toFixed(2));
      }

      // Calculate fee and update transfer status
      const fee = calculateFee(amount).toFixed(2);
      setTransferStatus((prev) =>
        prev.map((status) =>
          status.title === "Fee"
            ? { ...status, value: `${fee} ${baseCurrency.currency_code}` }
            : status
        )
      );
    } else {
      // Reset if input is invalid
      setRecipientAmount(0);
      setTransferStatus(transferStatusTemplate);
    }
  };

  useEffect(() => {
    fetchExchangeRate(baseCurrency.currency_code, targetCurrency.currency_code);
  }, [baseCurrency, targetCurrency]);

  return (
    <div className={clsx(styles.imageBackground, "w-full bg-cover")}>
      <div className="p-4 md:p-8 pb-10 bg-background bg-opacity-40">
        <div className=" flex lg:grid-cols-2 flex-col justify-between p-small text-dark md:grid">
          <div className=" flex flex-col justify-center items-center lg:items-start space-y-6 ">
            <h1 className="text-2xl font-bold text-dark text-center md:text-start md:text-4xl xl:text-6xl">
              Global transfer for your business
            </h1>
            <p className="w-full text-[1rem] text-center lg:text-start md:w-5/5 md:text-[1.2rem] 2xl:w-4/6">
              Become part of a community of businesses benefiting from our swift
              international transfer service, saving both time and money
            </p>
            <div className="flex gap-y-2 md:space-x-4 flex-col-reverse md:flex-row">
              {actions.map((action, index) => (
                <SubmitButton
                  key={index}
                  className={`px-14 py-3 text-sm border rounded-full font-semibold transition-transform duration-300 ease-in-out md:text-base md:py-3
              ${
                action.filled
                  ? "text-white border-white bg-brand hover:bg-brand-800"
                  : "text-brand border-brand bg-transparent hover:bg-brand hover:text-white"
              }
              `}
                >
                  {action.title}
                </SubmitButton>
              ))}
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <div
              className={clsx(
                "flex flex-col justify-between rounded-xl bg-white p-6 ",
                styles.exchangeContainer
              )}
            >
              <h2 className="text-xl font-bold text-dark">Transfers</h2>
              <div className="flex justify-between rounded-[0.8rem] bg-background px-thin py-[1rem] text-[0.8rem] md:text-[1rem] 2xl:text-[1.2rem] font-bold md:px-[2.4rem]">
                <h3> Exchange Rate:</h3>
                {exchangeRate ? (
                  <span>
                    1 {selectedSendCurrency.currency_code} ={" "}
                    {exchangeRate.toFixed(4)}{" "}
                    {selectedRecipientCurrency.currency_code}
                  </span>
                ) : (
                  <span>Loading...</span>
                )}
              </div>
              <div className="relative w-full">
                {/* Send Amount */}
                <p className="my-2">Send Amount</p>
                <div className="flex items-center bg-dark-50 rounded-full px-4 py-2">
                  <span className="mr-2 text-sm md:text-lg">
                    {selectedSendCurrency.sign}
                  </span>
                  <input
                    type="text"
                    placeholder="0"
                    value={sendAmount || ""}
                    onChange={(e) => handleSendAmountChange(e.target.value)}
                    className="flex-1 text-sm md:text-lg font-medium text-gray-900 bg-transparent focus:outline-none"
                  />
                  <img
                    src={selectedSendCurrency.flag}
                    alt={`${selectedSendCurrency.currency_code} flag`}
                    className="w-4 h-4 md:w-8 md:h-8 rounded-full"
                  />
                  <span className="ml-1 text-sm md:text-lg">
                    {selectedSendCurrency.currency_code}
                  </span>
                  <button onClick={() => toggleModal("send")}>
                    <SvgIcon
                      name="chevron-down"
                      className="mt-2 ml-1 md:ml-3 text-sm text-gray-600"
                    />
                  </button>
                </div>
              </div>
              <div className="relative w-full">
                {/* Recipient Gets */}
                <p className="my-2">Recipient Gets</p>
                <div className="flex items-center bg-dark-50 rounded-full px-4 py-2">
                  <span className="mr-2 text-sm md:text-lg">
                    {selectedRecipientCurrency.sign}
                  </span>
                  <input
                    type="text"
                    value={recipientAmount || ""}
                    readOnly
                    className="flex-1 text-sm md:text-lg font-medium text-gray-900 bg-transparent focus:outline-none"
                  />
                  <img
                    src={selectedRecipientCurrency.flag}
                    alt={`${selectedRecipientCurrency.currency_code} flag`}
                    className="w-4 h-4 md:w-8 md:h-8 rounded-full"
                  />
                  <span className="ml-1 text-sm md:text-lg">
                    {selectedRecipientCurrency.currency_code}
                  </span>
                  <button onClick={() => toggleModal("recipient")}>
                    <SvgIcon
                      name="chevron-down"
                      className="mt-2 ml-1 md:ml-3 text-sm text-gray-600"
                    />
                  </button>
                </div>
              </div>
              <div className="">
                {transferStatus.map((status, index) => (
                  <div
                    className="flex items-center justify-between"
                    key={index}
                  >
                    <p className="text-sm md:text-base">{status.title}</p>
                    <div className="flex gap-x-2">
                      <span className="text-sm md:text-base">
                        {status.value}
                      </span>
                      <SvgIcon name={status.icon}
                        className="mt-1 md:mt-0 md:text-xl fill-dark-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <hr />
              <div className="py-4">
                <div className="flex items-center justify-between py-2 text-sm md:text-base">
                  <p className="font-semibold text-gray-800">Amount to Pay</p>
                  <p className="font-semibold text-gray-800">
                    {sendAmount || 0} {baseCurrency.currency_code}
                  </p>
                </div>
                <div className="flex items-center justify-between py-2 text-sm md:text-base">
                  <p className="font-semibold text-gray-800">Recipient Gets</p>
                  <p className="font-semibold text-gray-800">
                    {recipientAmount || 0} {targetCurrency.currency_code}
                  </p>
                </div>
              </div>
              <SubmitButton
                className={`rounded-full text-white py-3 px-4 ${
                  sendAmount === 0
                    ? "bg-brand-200 cursor-not-allowed"
                    : "bg-brand"
                }`}
                disabled={sendAmount === 0}
              >
                Send Now
              </SubmitButton>
              {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="bg-white rounded-lg max-h-[70vh] w-11/12 sm:w-1/2 overflow-y-auto">
                    <div className="p-4 border-b">
                      <h2 className="text-lg font-bold">Select Currency</h2>
                    </div>
                    <ul className="p-4">
                      {currencies.map((currency, index) => (
                        <li
                          key={index}
                          className={`flex items-center justify-between p-2 cursor-pointer rounded-md ${
                            (activeField === "send" &&
                              currency.currency_code ===
                                selectedSendCurrency.currency_code) ||
                            (activeField === "recipient" &&
                              currency.currency_code ===
                                selectedRecipientCurrency.currency_code)
                              ? "bg-gray-200"
                              : "hover:bg-gray-100"
                          }`}
                          onClick={() => handleCurrencySelect(currency)}
                        >
                          <div className="flex items-center">
                            <img
                              src={currency.flag}
                              alt="Currency flag"
                              className="w-6 h-6 rounded-full mr-2"
                            />
                            <span className="font-medium">{currency.name}</span>
                          </div>
                          <span className="text-gray-500">
                            {currency.currency_code}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <button
                      className="w-full p-4 text-center bg-gray-100 text-gray-700 font-medium rounded-b-lg"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
