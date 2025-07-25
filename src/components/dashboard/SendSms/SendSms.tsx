"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useMutationHandler } from "@/hooks/useMutationHandler";
import { poster } from "@/lib/request";
import { selectAvailableSms } from "@/redux/allStateSlice";
import { useAppSelector } from "@/redux/hooks";
import { Loader } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const SendSMS = () => {
  const availableSms = useAppSelector(selectAvailableSms);
  const [isBulk, setIsBulk] = useState(false);
  const [message, setMessage] = useState("");
  const [recipient, setRecipient] = useState("");
  const URL = isBulk ? `/forwarder/send/?type=bulk` : `/forwarder/send/`;
  const { mutate: sendSmsMutate, isPending } = useMutationHandler({
    mutationFn: (payload) => poster(URL, payload),
    successMessage: "SMS sent successfully",
    errorMessage: "Failed to send SMS",
    queryKey: ["all-sms-list"],
    
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message || !recipient) {
      toast.error("Message and recipient are required");
      return;
    }
    if (isBulk && !recipient.includes(",")) {
      toast.error(
        "For bulk SMS, please enter multiple recipients separated by commas"
      );
      return;
    }
    if (recipient.length < 11) {
      toast.error("Phone number must be at least 11 characters");
      return;
    }
    if (message.length > 160) {
      toast.error("Message cannot exceed 160 characters");
      return;
    }
    sendSmsMutate({
      message: message,
      [isBulk ? "recipients" : "recipient"]: isBulk
        ? recipient.split(",")
        : recipient,
    });

    setMessage("");
    setRecipient("");
  };
  return (
    <section className="flex container mx-auto flex-col items-center justify-center ">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800 dark:text-white">
          Send SMS or OTP
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center justify-between mb-6 border-b pb-4">
            <Label className="text-gray-700 dark:text-gray-300">
              Single SMS
            </Label>
            <Switch checked={isBulk} onCheckedChange={setIsBulk} />
            <Label className="text-gray-700 dark:text-gray-300">Bulk SMS</Label>
          </div>
          {/* Message Input */}
          <div className="mb-4">
            <Label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Message
            </Label>
            <Textarea
              name="message"
              maxLength={160}
              rows={3}
              onChange={(e) => setMessage(e.target.value)}
              placeholder=" Welcome to Cloud SMS BD, Thank you for taking our service!"
              className="w-full dark:bg-gray-800 dark:text-white "
            />
          </div>
          {/* Character Counter */}
          <div className="text-xs text-gray-500 dark:text-gray-400 text-right mt-1">
            {message.length} / 160
          </div>

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
                onChange={(e) => setRecipient(e.target.value)}
                value={recipient}
              />
            </div>

            <p className="text-xs text-gray-500 mt-1">
              {isBulk
                ? "Enter multiple phone numbers separated by commas."
                : "Enter a single phone number."}
            </p>
          </div>

          {/* Send Button */}
          <Button
            disabled={isPending}
            className="w-full bg-sky-500 hover:bg-sky-600 text-white"
            type="submit"
          >
            {isPending ? <Loader className="w-6 h-6 animate-spin" /> : ""}
            Send SMS
          </Button>
          {availableSms && (
            <p className="text-center mt-1 text-sm text-gray-500">
              Available SMS: {availableSms}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default SendSMS;
