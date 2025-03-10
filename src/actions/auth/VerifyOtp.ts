import axios from "axios";
import { toast } from "sonner";
import { z } from "zod";

const OtpSchema = z.object({
  otp: z.string().min(6, "please enter a valid otp"),
});
type OtpType = {
  errors: {
    otp?: string[];
    formError?: string[];
  };
  success?: boolean;
};
export const VerifyOtpAction = async (
  previousState: OtpType,
  formData: FormData
): Promise<OtpType> => {
  //  Validate the form data
  const result = OtpSchema.safeParse({
    otp: formData.get("otp"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/customer/verify-otp/`,
      {
        otp: formData.get("otp"),
      },
      {
        withCredentials: true,
      }
    );

    toast.success("OTP verified successfully");
    return {
      success: true,
      errors: {},
    };
  } catch (error: unknown) {
    toast.error("Failed to verify OTP");
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
