import axios from "axios";

const GetApiToken = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/customer/api-key/`,
      { withCredentials: true }
    );

    return res?.data?.api_key;
  } catch {}
};

export default GetApiToken;
