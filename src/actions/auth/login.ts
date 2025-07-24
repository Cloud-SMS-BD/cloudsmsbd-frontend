import HandleError from "@/lib/errorHandle";
import axios from "axios";
import { toast } from "sonner";
import { z } from "zod";

const LoginSchema = z.object({
  email: z.string().email("please enter a valid email"),
  password: z.string().min(0, "please enter a valid password"),
});
type LoginType = {
  errors: {
    email?: string[];
    password?: string[];
    formError?: string[];
    verified?: string[];
  };
  success?: boolean;
};
export const LoginAction = async (
  previousState: LoginType,
  formData: FormData
): Promise<LoginType> => {
  //  Validate the form data
  const result = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/rest-auth/login/`,
      {
        email: formData.get("email"),
        password: formData.get("password"),
      },
      {
        withCredentials: true,
      }
    );
    if (res.data.verified == false) {
      return {
        errors: {
          verified: ["Please verify your email"],
        },
        success: false,
      };
    }
    toast.success("Log in successful");
  } catch (error) {
    return HandleError(error);
  }

  return { success: true, errors: {} };
};
