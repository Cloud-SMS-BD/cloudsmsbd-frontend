"use client";
import { selectIsLogin } from "@/redux/allStateSlice";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";

const Hero = () => {
  const isLogin = useAppSelector(selectIsLogin);

  return (
    <div className="relative isolate overflow-hidden bg-white dark:bg-gray-900 transition-colors">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-20 dark:bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-800),white)]"></div>
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center dark:bg-gray-800 dark:ring-gray-700"></div>
      <section className="pt-12 sm:pt-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center">
          <h1 className="px-6 text-lg text-gray-600 dark:text-gray-300">
            Affordable & Reliable SMS Service in Bangladesh
          </h1>
          <p className="mt-5 text-4xl font-bold text-gray-900 dark:text-gray-100 sm:text-5xl lg:text-6xl">
            Send SMS at unbeatable rates{" "}
            <span className="relative inline-flex">
              <span className="absolute inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#7c5eff] blur-lg opacity-30"></span>
              <span className="relative">
                {" "}
                Starting from{" "}
                <span className="bg-gradient-to-r from-[#FF44EC] via-violet-600 to-[#FF675E] text-transparent bg-clip-text">
                  0.30 TK!
                </span>{" "}
              </span>
            </span>
          </p>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Experience secure, fast, and cost-effective SMS solutions for your
            business, enhanced by AI technology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center mt-9 space-y-4 sm:space-y-0 sm:space-x-5">
            <Link
              href={`${isLogin ? "/dashboard/api-tokens" : "/auth/register"}`}
            >
              {/*  */}
              <button className="px-8 py-2 cursor-pointer rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
                <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                <span className="relative z-20">
                  {" "}
                  {isLogin ? "Get API Token" : "Sign Up Free!"}
                </span>
              </button>
            </Link>
            <Link
              href={`${isLogin ? "/dashboard/send-sms-otp" : "/documentation"}`}
            >
              {/*  */}
              <button className="bg-slate-800 no-underline group cursor-pointer relative  rounded-full p-px text-sm font-semibold leading-6  text-white inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-[6.5px] px-8 ring-1 ring-white/10 ">
                  <span>{isLogin ? "Send SMS" : "Documentation"}</span>
                  <svg
                    fill="none"
                    height="16"
                    viewBox="0 0 24 24"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.75 8.75L14.25 12L10.75 15.25"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
              </button>
            </Link>
          </div>
          <p className="mt-8 text-base text-gray-500 dark:text-gray-400">
            Limited time offer: Get 10 SMS free on sign up!
          </p>
        </div>
        <div className="relative py-4">
          <div className="absolute inset-0 h-2/3"></div>
          <div className="relative mx-auto lg:max-w-6xl">
            <div className="relative p-[4px] rounded-lg">
              {/* Gradient Border */}
              <span className="absolute inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] blur-lg opacity-30 to-[#7c5eff] rounded-lg p-[2px]"></span>

              {/* Image with border inside gradient */}
              <div className="relative bg-white dark:bg-gray-900 rounded-lg overflow-hidden">
                <img
                  className="rounded-lg shadow-lg w-auto h-auto"
                  src="/heroimg.png"
                  alt="heroimgpng"
                />
                {/* <Image
                  width={1200}
                  height={800}
                  quality={100}
                  className="rounded-lg shadow-lg w-auto h-auto"
                  src="/heroimg.png"
                  alt="heroimgpng"
                  placeholder="blur"
                  priority
                 
                /> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
