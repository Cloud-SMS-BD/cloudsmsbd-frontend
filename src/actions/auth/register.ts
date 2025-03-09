import { redirect } from "next/navigation";
import { z } from "zod";
import axios from "axios";

const RegisterSchema = z.object({
  name: z.string().min(1, "Please enter a valid name"),
  phone_number: z.string().min(11, "Phone number must be 11 digits"),
  email: z.string().email("Please enter a valid email"),
  password1: z.string().min(6, "Password must be at least 6 characters"),
  password2: z.string().min(6, "Password must be at least 6 characters"),
});
type RegisterType = {
  errors: {
    name?: string[];
    phone_number?: string[];
    email?: string[];
    password1?: string[];
    password2?: string[];
    formError?: string[];
  };
};
export const RegisterAction = async (
  previousState: RegisterType,
  formData: FormData
): Promise<RegisterType> => {
  //  Validate the form data
  const result = RegisterSchema.safeParse({
    name: formData.get("name"),
    phone_number: formData.get("phone_number"),
    email: formData.get("email"),
    password1: formData.get("password1"),
    password2: formData.get("password2"),
  });

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/customer/registration/`,
      {
        name: formData.get("name"),
        phone_number: formData.get("phone_number"),
        email: formData.get("email"),
        password1: formData.get("password1"),
        password2: formData.get("password2"),
      },
      {
        withCredentials: true,
      }
    );
    console.log(res.data);
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

  redirect("/auth/verify-otp");
};
