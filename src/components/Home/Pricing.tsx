"use client";
import { Button } from "../ui/button";

const pricingPlans = [
  {
    name: "Hobby",
    basePrice: 0,
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    features: ["No setup", "No hidden fees", "Speed"],
  },
  {
    name: "Expert",
    basePrice: 0,
    description:
      "Stripe offers everything needed to run an online business at scale. Get in touch for details.",
    features: ["No setup", "Hidden fees", "Original"],
  },
  {
    name: "Enterprise",
    basePrice: 0,
    description:
      "Stripe offers everything needed to run an online business at scale. Get in touch for details.",
    features: ["Unlimited Setup", "Custom Pricing", "Customer Support"],
  },
];

function PricingSection() {
  return (
    <section className="bg-gray-50 dark:bg-slate-800 ">
      <div className="container max-w-full mx-auto py-12 px-6">
        <h1 className="text-center text-4xl text-black dark:text-white font-medium leading-snug tracking-wider">
          Pricing
        </h1>
        <p className="text-center text-lg text-gray-700 dark:text-gray-300 mt-2 px-6">
          Choose the plan that works for you. All plans include a 7-day free trial.
        </p>
        <div className="h-1 mx-auto bg-indigo-200 dark:bg-indigo-600 w-24 opacity-75 mt-4 rounded"></div>

        <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
          <div className="relative flex flex-col md:flex-row items-center">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-${
                  index === 1 ? "10" : "0"
                } rounded-lg shadow-xl ${index === 1 ? "bg-white dark:bg-gray-800" : ""}`}
              >
                <div className="bg-white text-black dark:bg-gray-900 dark:text-white rounded-lg overflow-hidden">
                  <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black dark:text-white px-8 lg:px-6">
                    {plan.name === "Expert" && (
                      <div className="text-sm leading-none rounded-t-lg bg-gray-200 dark:bg-gray-700 text-black dark:text-slate-400 font-semibold uppercase py-4 text-center tracking-wide">
                        Most Popular
                      </div>
                    )}
                    <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                      {plan.name}
                    </h1>
                    <h2 className="text-sm text-gray-500 dark:text-gray-300 text-center pb-6">
                      <span className="text-3xl">{plan.basePrice === 0 ? "0 TK" : plan.basePrice} </span> /mo
                    </h2>
                    <p className="text-center pb-6">{plan.description}</p>
                  </div>
                  <div className="flex flex-wrap mt-3 px-6">
                    <ul>
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className="rounded-full p-2 fill-current text-green-700">
                            <svg
                              className="w-6 h-6 align-middle"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                              <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 text-lg ml-3">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-center p-8 uppercase">
                    <Button>{"Coming Soon"}</Button>
                  </div>
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
