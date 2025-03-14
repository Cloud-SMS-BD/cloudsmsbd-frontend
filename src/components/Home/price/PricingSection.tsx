import Pricing from "./Pricing";

const PricingSection = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-slate-900 dark:to-slate-800">
      <div className="text-center pt-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Pricing
        </h1>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          Choose the item that works for you.
        </p>
        <div className="h-1 mx-auto w-24 mt-6 rounded bg-sky-500" ></div>
      </div>
      <Pricing />
    </div>
  );
};

export default PricingSection;
