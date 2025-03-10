import axios from "axios";
import { toast } from "sonner";

type DeleteApiKey = {
  errors?: {
    formError?: string[];
  };
};

export const DeleteApiKeyAction = async (): Promise<DeleteApiKey> => {
  try {
    await axios.delete(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/customer/api-key/`,
      {
        withCredentials: true,
      }
    );

    toast.success("API Key Deleted Successfully!");
    return {};
  } catch {
    toast.error("Error Deleting API Key");

    return {
      errors: {
        formError: ["Error Deleting API Key"],
      },
    };
  }
};
