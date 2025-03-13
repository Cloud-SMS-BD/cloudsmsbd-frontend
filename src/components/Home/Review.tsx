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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "John Doe",
    title: "CEO",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "John Doey",
    title: "CEO",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "John Dob",
    title: "CEO",
  },
];
