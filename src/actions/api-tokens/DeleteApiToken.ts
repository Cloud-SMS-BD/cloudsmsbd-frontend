import axios from "axios";
import { toast } from "sonner";

type DeleteApiKey = {
  errors?: {
    formError?: string[];
  };
};

export const DeleteApiKeyAction = async (): Promise<DeleteApiKey> => {
  try {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/customer/api-key/`,
      {
        withCredentials: true,
      }
    );
    console.log(res.data);
    toast.success("API Key Deleted Successfully!");
    return {};
  } catch (error) {
    toast.error("Error Deleting API Key");
    console.log(error);
    return {
      errors: {
        formError: ["Error Deleting API Key"],
      },
    };
  }
};
