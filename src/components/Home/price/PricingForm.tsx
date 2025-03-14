"use client";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";
import { PurchaseAction } from "@/actions/purchase/Purchase";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader } from "lucide-react";
import { useActionState } from "react";

const PricingForm = ({
  item,
  smsQuantityStarter,
  smsQuantityMonthly,
  isBusiness,
}: any) => {
  console.log(smsQuantityStarter);

  const [state, action, isPending] = useActionState(PurchaseAction, {
    errors: {},
  });
  return state.success ? (
    <div className="bg-green-100 text-green-500 rounded-md text-center p-2">
      😄 আপনার প্যাকেজ ক্রয় সফল হয়েছে। আপনার পেমেন্ট যাচাই করা হচ্ছে, এবং শীঘ্রই
      আপনার অ্যাকাউন্টে এসএমএস প্যাকেজ যুক্ত করা হবে।{" "}
      <p className="font-semibold">Cloud SMS BD</p> এর সাথেই থাকুন। যেকোনো
      সহায়তার জন্য যোগাযোগ করুন:
      <p className="font-semibold underline underline-offset-2"> 01760001377</p>
    </div>
  ) : (
    <>
      <form action={action} className="space-y-4 mt-4 container mx-auto p-1">
        <Input
          required
          type="text"
          name="package_name"
          className="hidden"
          defaultValue={item.package_name}
          placeholder="Package Name"
        />
        {!isBusiness ? (
          <>
            <Input
              required
              type="text"
              name="sms_quantity"
              className="hidden"
              defaultValue={
                item.package_name === "monthly"
                  ? smsQuantityMonthly
                  : smsQuantityStarter
              }
              placeholder="Sms Quantity"
            />
            <Label>Transaction ID</Label>
            <Input
              required
              type="text"
              name="tranx_id"
              placeholder="Transaction ID"
            />
          </>
        ) : (
          <>
            <Label>Contact Name</Label>
            <Input
              required
              type="text"
              name="contact_name"
              placeholder="Contact Name"
            />

            <Label>Contact Number</Label>
            <Input
              required
              type="text"
              name="contact_phone_number"
              placeholder="Contact Number"
            />
          </>
        )}

        <Label>Comment</Label>
        <Textarea name="customer_remarks" placeholder="Comment (Optional)" />

        <div className="mt-4 flex justify-end space-x-2">
          <Button
            type="submit"
            className="bg-sky-500 hover:bg-sky-600 text-white"
          >
            {isPending ? <Loader className="w-6 h-6 animate-spin" /> : null}
            {!isBusiness ? "Purchase" : "Submit"}
          </Button>
          {state.errors.formError ? (
            <div className="text-red-500 text-sm">{state.errors.formError}</div>
          ) : null}
        </div>
      </form>
    </>
  );
};

export default PricingForm;
