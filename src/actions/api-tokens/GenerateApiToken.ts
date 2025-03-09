import axios from "axios";
import { toast } from "sonner";

type GenerateApiKey = {
  errors?: {
    formError?: string[];
  };
};
export const GenerateApiKeyAction = async (
  
): Promise<GenerateApiKey> => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/customer/api-key/`,
      {},
      {
        withCredentials: true,
      }
    );

    console.log("data", res.data);
    toast.success("API Key generated successfully");
    return {};
  } catch (error) {
    toast.error("Failed to generate API Key");
    console.error(error);
    return {
      errors: {
        formError: ["Failed to generate API Key"],
      },
    };
  }
};
