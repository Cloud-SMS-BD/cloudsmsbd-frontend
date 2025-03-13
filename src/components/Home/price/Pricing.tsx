"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Check } from "lucide-react";
import { useState } from "react";
import PricingModal from "./PricingModal";

function PricingSection() {
  const [smsQuantityStarter, setSmsQuantityStarter] = useState(250);
  const [smsQuantityMonthly, setSmsQuantityMonthly] = useState(50);

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Pricing
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Choose the item that works for you.
          </p>
          <div className="h-1 mx-auto bg-primary w-24 mt-6 rounded"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingitems.map((item) => (
              <div
                key={item.id}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  item.id === 2
                    ? "shadow-lg border-2 border-sky-500 dark:border-sky-600 md:scale-110 z-10"
                    : "shadow-md border border-gray-200 dark:border-gray-700"
                }`}
              >
                {item.id === 2 && (
                  <div className="absolute top-0 left-0 right-0  font-semibold uppercase py-2 text-center bg-sky-500 text-sm text-white tracking-wide">
                    Best Value
                  </div>
                )}
                <div className="bg-white dark:bg-gray-800 p-6 pt-8 h-full flex flex-col">
                  <div className={item.id === 2 ? "pt-4" : ""}>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white text-center">
                      {item.name}
                    </h2>
                    <div className="mt-4 text-center">
                      <span className="text-3xl font-bold text-gray-900 dark:text-white">
                        {item.basePrice}
                      </span>
                    </div>
                    <p className="mt-4 text-gray-600 dark:text-gray-300 text-center">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-6 flex-grow">
                    {/*  Stater */}
                    {item.id === 1 && (
                      <div className="space-y-4">
                        <Slider
                          min={1}
                          max={500}
                          step={1}
                          value={[smsQuantityStarter]}
                          onValueChange={(value) => {
                            setSmsQuantityStarter(value[0]);
                          }}
                          className="my-6"
                        />
                        <p className="text-center font-medium">
                          Selected:{" "}
                          <span className="text-sky-500">
                            {smsQuantityStarter} SMS
                          </span>
                        </p>
                        <p className="text-center text-sm text-gray-500 dark:text-gray-400 font-semibold">
                          Total: {(smsQuantityStarter * 0.3).toFixed(2)} Taka
                        </p>
                      </div>
                    )}
                    {/* Monthly */}
                    {item.id === 2 && (
                      <RadioGroup
                        value={smsQuantityMonthly.toString()}
                        className="space-y-3 mt-4"
                      >
                        {item.features.map((item, i) => (
                          <div
                            key={i}
                            className="flex  items-center space-x-2 rounded-lg p-2 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer"
                          >
                            <RadioGroupItem
                              value={item.split(" ")[0]}
                              onClick={() => {
                                setSmsQuantityMonthly(
                                  Number(item.split(" ")[0])
                                );
                              }}
                              id={`package-${i}`}
                            />
                            <Label
                              htmlFor={`package-${i}`}
                              className="flex-grow cursor-pointer"
                            >
                              {item}
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    )}
                    {/* Buisness */}
                    {item.id === 3 && (
                      <ul className="space-y-3 mt-4">
                        {item.features.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <Check className="h-5 w-5 shrink-0 mr-2 text-sky-500" />
                            <span className="text-gray-600 dark:text-gray-300">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <PricingModal
                    item={item}
                    smsQuantityStarter={smsQuantityStarter}
                    smsQuantityMonthly={smsQuantityMonthly}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;

const pricingitems = [
  {
    id: 1,
    name: "Starter",
    package_name: "starter",
    basePrice: "1-500 SMS",
    description: "0.3 Taka per SMS",
    features: ["No setup", "No hidden fees", "Pay-as-you-go"],
  },
  {
    id: 2,
    name: "Monthly Package",
    package_name: "monthly",
    basePrice: "",
    description: "Choose a item that fits your needs.",
    features: [
      "50 SMS - 13 Taka (0.26 per sms)",
      "100 SMS - 25 Taka (0.25 per sms)",
      "200 SMS - 50 Taka (0.25 per sms)",
      "500 SMS - 110 Taka (0.22 per sms)",
    ],
  },
  {
    id: 3,
    name: "Business",
    package_name: "business",
    basePrice: "Custom Pricing",
    description: "Contact us for a personalized deal.",
    features: ["Unlimited Setup", "Custom Pricing", "Dedicated Support"],
  },
];
