import axios from "axios";
import { toast } from "sonner";
import { z } from "zod";

const purchaseSchema = z.object({
  package_name: z.string(),
  //starter, monthly
  sms_quantity: z.string().optional(),
  tranx_id: z.string().optional(),
  customer_remarks: z.string().optional(),
  // business package
  contact_name: z.string().optional(),
  contact_phone_number: z.string().optional(),
});
type purchaseType = {
  errors: {
    // starter, monthly
    package_name?: string[];
    sms_quantity?: string[];
    tranx_id?: string[];
    customer_remarks?: string[];
    // business package
    contact_name?: string[];
    contact_phone_number?: string[];
    formError?: string[];
  };
  success?: boolean;
};
export const PurchaseAction = async (
  previousState: purchaseType,
  formData: FormData
): Promise<purchaseType> => {
  let payload: any = { package_name: formData.get("package_name") };

  if (formData.get("package_name") !== "business") {
    payload = {
      ...payload,
      sms_quantity: Number(formData.get("sms_quantity")),
      tranx_id: formData.get("tranx_id"),
      customer_remarks: formData.get("customer_remarks"),
    };
  } else {
    payload = {
      ...payload,
      contact_name: formData.get("contact_name"),
      contact_phone_number: formData.get("contact_phone_number"),
    };
  }
  //  Validate the form data
  const result = purchaseSchema.safeParse({
    package_name: formData.get("package_name"),
    sms_quantity: formData.get("sms_quantity") || "",
    tranx_id: formData.get("tranx_id") || "",
    customer_remarks: formData.get("customer_remarks") || "",
    contact_name: formData.get("contact_name") || "",
    contact_phone_number: formData.get("contact_phone_number") || "",
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/customer/purchase/`,
      payload,
      {
        withCredentials: true,
      }
    );

    toast.success("Purchase successful");
    console.log(res);
    return {
      errors: {},
      success: true,
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        errors: {
          formError: axios.isAxiosError(error)
            ? error.response?.data.message
            : [error.message],
        },
      };
    } else {
      return {
        errors: {
          formError: ["Unknown error"],
        },
      };
    }
  }
};
