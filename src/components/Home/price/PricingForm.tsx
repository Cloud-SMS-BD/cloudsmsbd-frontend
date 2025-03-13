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
}: {
  item: any;
  smsQuantityStarter: any;
  smsQuantityMonthly: any;
}) => {
  console.log(smsQuantityStarter);

  const [state, action, isPending] = useActionState(PurchaseAction, {
    errors: {},
  });
  return (
    <form action={action} className="space-y-4 mt-4">
      <div className="space-y-2">
        <Label>Package Name</Label>
        <Input
          required
          type="text"
          name="package_name"
          defaultValue={item.package_name}
          placeholder="Package Name"
        />
        {state.errors.package_name ? (
          <div className="text-red-500 text-sm">
            {state.errors.package_name}
          </div>
        ) : null}
      </div>
      {item.id !== 3 ? (
        <>
          <div className="space-y-2">
            <Label>Sms Quantity</Label>
            <Input
              required
              type="text"
              name="sms_quantity"
              defaultValue={
                item.package_name === "monthly"
                  ? smsQuantityMonthly
                  : smsQuantityStarter
              }
              placeholder="Sms Quantity"
            />
          </div>
          <div className="space-y-2">
            <Label>Transaction ID</Label>
            <Input
              required
              type="text"
              name="tranx_id"
              placeholder="Transaction ID"
            />
          </div>
        </>
      ) : (
        <>
          <div className="space-y-2">
            <Label>Contact Name</Label>
            <Input
              required
              type="text"
              name="contact_name"
              placeholder="Contact Name"
            />
          </div>
          <div className="space-y-2">
            <Label>Contact Number</Label>
            <Input
              required
              type="text"
              name="contact_phone_number"
              placeholder="Contact Number"
            />
          </div>
        </>
      )}

      <div className="space-y-2">
        <Label>Comment</Label>
        <Textarea name="customer_remarks" placeholder="Comment (Optional)" />
      </div>

      <div className="mt-4 flex justify-end space-x-2">
        <Button
          type="submit"
          className="bg-sky-500 hover:bg-sky-600 text-white"
        >
          {isPending ? <Loader className="w-6 h-6 animate-spin" /> : null}
          {item.id !== 3 ? "Purchase" : "Submit"}
        </Button>
        {state.errors.formError ? (
          <div className="text-red-500 text-sm">{state.errors.formError}</div>
        ) : null}
      </div>
    </form>
  );
};

export default PricingForm;
