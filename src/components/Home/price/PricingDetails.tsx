import { useState } from "react";
import Image from "next/image";
import { Clipboard, Check } from "lucide-react"; // Icons

const PricingDetails = ({
  item,
  smsQuantityMonthly,
  smsQuantityStarter,
}: {
  item: any;
  smsQuantityMonthly: any;
  smsQuantityStarter: any;
}) => {
  const [copiedNumber, setCopiedNumber] = useState<string | null>(null);

  const copyToClipboard = (number: string) => {
    navigator.clipboard.writeText(number);
    setCopiedNumber(number);
    setTimeout(() => setCopiedNumber(null), 1500); // Reset after 1.5s
  };

  const smsQuantityMonthlyPrice =
    smsQuantityMonthly === 50
      ? 13
      : smsQuantityMonthly === 100
      ? 25
      : smsQuantityMonthly === 200
      ? 50
      : smsQuantityMonthly === 500
      ? 110
      : 0;
  const price =
    item.package_name === "monthly"
      ? smsQuantityMonthlyPrice
      : (smsQuantityStarter * 0.3).toFixed(2);

  const SmsQuantity =
    item.package_name === "monthly" ? smsQuantityMonthly : smsQuantityStarter;

  return (
    <div className="text-black dark:text-white p-2">
      <div>
        You are purchasing the{" "}
        <strong className="text-red-500">{item?.name}</strong> package.
      </div>
      <div className="mt-2">
        Selected Quantity:{" "}
        <span className="text-red-500">{SmsQuantity} SMS</span>
      </div>
      <div className="mt-2">
        Price: <span className="text-red-500">{price} Taka</span>
      </div>

      {/* Bkash Payment Section */}
      <div className="flex flex-col items-center justify-center mt-4 border rounded-md p-4">
        <Image
          src="/bkash.png"
          width={100}
          height={100}
          alt="Bkash"
          className="rounded-lg"
        />
        <p className="text-lg font-bold mt-2">Bkash Payment</p>

        {/* Payment Numbers */}
        {["01760001377"].map((number) => (
          <div
            key={number}
            className="flex items-center font-semibold gap-2 text-red-500 mt-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-md"
          >
            <span className="text-md tracking-wide">{number}</span>
            <button onClick={() => copyToClipboard(number)}>
              {copiedNumber === number ? (
                <Check className="text-green-500" size={18} />
              ) : (
                <Clipboard size={18} className="cursor-pointer" />
              )}
            </button>
          </div>
        ))}
        <span className="mt-2 text-center">
          বিকাশ নম্বরে <span className="text-red-500 font-semibold">Send money </span>করুন এবং{" "}
          <span className="text-red-500 font-semibold">Transaction ID </span>সংরক্ষণ করুন
        </span>
      </div>
    </div>
  );
};

export default PricingDetails;
