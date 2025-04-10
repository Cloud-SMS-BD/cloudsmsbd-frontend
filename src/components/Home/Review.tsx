import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function Reviews() {
  return (
    <div className="h-[42rem] flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden px-4">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
          What Our Users Say
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2 md:text-lg">
          Hear from our happy customers and their experiences.
        </p>
      </div>

      {/* Moving Cards Section */}
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Integration was smooth and easy. The API docs were clear, and I had OTPs running in no time. Great for local projects.",
    name: "Raihan Hossain",
    title: "",
  },
  {
    quote:
      "I use Cloud SMS BD to notify my regular customers about offers. It’s easy to use and saves me a lot of time.",
    name: "Ecommerce Owner",
    title: "",
  },
  {
    quote: "Easy to use API with Flexible and Affordable pricing!",
    name: "Nur Mahmud Tasin",
    title: "",
  },
  {
    quote:
      "Our order updates now go instantly to customers via SMS. Very helpful during sales and Eid campaigns.",
    name: "Nasif Mahmud",
    title: "",
  },
  {
    quote:
      "Tried it for my small campaign – worked perfectly! Plus, the SMS rate is really affordable.",
    name: "Nahian",
    title: "",
  },
];
