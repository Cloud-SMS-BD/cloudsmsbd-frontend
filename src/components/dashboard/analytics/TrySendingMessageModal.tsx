import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import SendSMS from "../SendSms/SendSms";
import { MessageSquareMore } from "lucide-react";

export function TrySendingMessage() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="mt-4 py-6 bg-sky-600 hover:bg-sky-600 text-white w-full gap-2">
          <MessageSquareMore size={"25"}/>
          Try Sending Sms
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0">
        <DialogHeader className="hidden">
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <SendSMS />
        <DialogFooter className="hidden"></DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
