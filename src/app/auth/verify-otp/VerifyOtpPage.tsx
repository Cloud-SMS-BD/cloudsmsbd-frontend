"use client";
import { VerifyOtpAction } from "@/actions/auth/VerifyOtp";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { setIsLogin } from "@/redux/allStateSlice";
import { useAppDispatch } from "@/redux/hooks";
import axios from "axios";
import { Loader } from "lucide-react";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";

const VerifyOtpPage = () => {
  const dispatch = useAppDispatch();

  const [state, action, isPending] = useActionState(VerifyOtpAction, {
    errors: {},
  });
  // If the OTP is verified successfully, set the isLogin state to true
  useEffect(() => {
    if (state.success) {
      dispatch(setIsLogin(true));
    }
  }, [state.success, dispatch]);
  // Timer state for 10 minutes (600 seconds)
  const [timer, setTimer] = useState(600); // Set initial timer value to 600 seconds (10 minutes)
  const [isTimerActive, setIsTimerActive] = useState(true);

  useEffect(() => {
    // Start the countdown timer
    if (isTimerActive && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      // Clear interval once the timer reaches 0 or is stopped
      return () => clearInterval(interval);
    } else {
      setIsTimerActive(false); // Stop the timer when it reaches 0
    }
  }, [isTimerActive, timer]);

  // Resend OTP handler (you can implement your logic for resending OTP)
  const handleResendOtp = async (e: any) => {
    e.preventDefault();
    setIsTimerActive(true); // Restart the timer
    setTimer(600); // Reset the timer to 600 seconds (10 minutes)
    // Your resend OTP logic here
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/customer/resend-otp/`,
        {},
        {
          withCredentials: true,
        }
      );
      console.log(res.data);
      toast.success("Otp sent successfully");
    } catch (error) {
      toast.error("Error in resending otp");
      console.log(error);
    }
  };

  // Convert the timer seconds to minutes and seconds format
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <form
      action={action}
      className="min-h-[93vh] flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4"
    >
      <div className="max-w-md w-full border p-8 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-[#686df6] to-emerald-500 text-transparent bg-clip-text mb-2">
          Verify Your Phone Number
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
          Enter the 6-digit code sent to your phone number
        </p>
        <div className="flex justify-center mb-6">
          <InputOTP maxLength={6} name="otp" required>
            <InputOTPGroup>
              <InputOTPSlot className="dark:border-slate-600" index={0} />
              <InputOTPSlot className="dark:border-slate-600" index={1} />
              <InputOTPSlot className="dark:border-slate-600" index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot className="dark:border-slate-600" index={3} />
              <InputOTPSlot className="dark:border-slate-600" index={4} />
              <InputOTPSlot className="dark:border-slate-600" index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        {state.errors.otp && (
          <div className="bg-red-100 text-red-500 p-2 rounded-lg my-2">
            {state.errors.otp}
          </div>
        )}
        <Button
          type="submit"
          disabled={isPending}
          className="w-full bg-gradient-to-r from-[#686df6] to-emerald-500 text-white py-2 rounded-lg text-lg font-semibold hover:opacity-90 transition"
        >
          {isPending && <Loader className="mr-2 animate-spin" size={18} />}
          Verify OTP
        </Button>
        {state.errors.formError && (
          <div className="bg-red-100 text-red-500 p-2 rounded-lg my-2">
            {`${state.errors.formError} `}{" "}
            <Link className="underline underline-offset-4" href="/auth/register">
              Register here
            </Link>
          </div>
        )}

        <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          {isTimerActive ? (
            <p>
              Limit{" "}
              <strong>
                {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
              </strong>
            </p>
          ) : (
            <Button
              onClick={handleResendOtp}
              className="text-blue-500 hover:underline"
            >
              Resend OTP
            </Button>
          )}
        </div>
      </div>
    </form>
  );
};

export default VerifyOtpPage;
