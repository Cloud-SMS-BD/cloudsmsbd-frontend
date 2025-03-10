import axios from "axios";
import { toast } from "sonner";

type GenerateApiKey = {
  errors?: {
    formError?: string[];
  };
};
export const GenerateApiKeyAction = async (): Promise<GenerateApiKey> => {
  try {
    await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/customer/api-key/`,
      {},
      {
        withCredentials: true,
      }
    );

    toast.success("API Key generated successfully");
    return {};
  } catch {
    toast.error("Failed to generate API Key");

    return {
      errors: {
        formError: ["Failed to generate API Key"],
      },
    };
  }
};
