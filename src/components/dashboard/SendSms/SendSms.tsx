"use client";

import { SendSmsAction } from "@/actions/send-sms-otp/SendSms";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { setSendSmsRefresh } from "@/redux/allStateSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Loader } from "lucide-react";
import { useActionState, useEffect, useState } from "react";

const SendSMS = () => {
  const dispatch = useAppDispatch();
  const [isBulk, setIsBulk] = useState(false);
  const [state, action, isPending] = useActionState(
    SendSmsAction.bind(null, isBulk),
    {
      errors: {},
    }
  );
  useEffect(() => {
    if (!isPending) {
      dispatch(setSendSmsRefresh());
    }
  }, [isPending, dispatch, state]);
  return (
    <section className="flex container mx-auto flex-col items-center justify-center ">
      <div className="max-w-3xl w-full bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-white">
          Send SMS or OTP
        </h2>
        <form action={action}>
          <div className="flex items-center justify-between mb-6 border-b pb-4">
            <Label className="text-gray-700 dark:text-gray-300">
              Single SMS
            </Label>
            <Switch checked={isBulk} onCheckedChange={setIsBulk} />
            <Label className="text-gray-700 dark:text-gray-300">
              Bulk SMS
            </Label>
          </div>
          {/* Message Input */}
          <div className="mb-4">
            <Label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Message
            </Label>
            <Textarea
              name="message"
              placeholder=" Welcome to Cloud SMS BD, Thank you for taking our service!"
              className="w-full dark:bg-gray-800 dark:text-white"
            />
          </div>
          {state.errors.message && (
            <div className="bg-red-100 text-red-500 p-2 rounded-lg my-2 mt-4">
              {state.errors.message}
            </div>
          )}
          {/* Recipient Input */}
          <div className="mb-4">
            <Label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              {isBulk ? "Recipients (comma-separated)" : "Recipient"}
            </Label>

            <div className="relative">
              {/* +88 Prefix */}
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300">
                +88
              </span>

              {/* Input Field */}
              <Input
                name="recipient"
                placeholder={isBulk ? "01XXXXXXX, 01XXXXXXX" : "01XXXXXXX"}
                className="w-full pl-12 dark:bg-gray-800 dark:text-white"
              />
            </div>

            <p className="text-xs text-gray-500 mt-1">
              {isBulk
                ? "Enter multiple phone numbers separated by commas."
                : "Enter a single phone number."}
            </p>
          </div>

          {state.errors.recipient && (
            <div className="bg-red-100 text-red-500 p-2 rounded-lg my-2 mt-4">
              {state.errors.recipient}
            </div>
          )}

          {/* Send Button */}
          <Button
            disabled={isPending}
            className="w-full bg-sky-500 hover:bg-sky-600 text-white"
            type="submit"
          >
            {isPending ? <Loader className="w-6 h-6 animate-spin" /> : ""}
            Send SMS
          </Button>
          {state.errors.formError && (
            <div className="bg-red-100 text-red-500 p-2 rounded-lg my-2 mt-4">
              {state.errors.formError}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default SendSMS;
