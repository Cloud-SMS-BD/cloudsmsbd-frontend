import axios from "axios";

const GetProfile = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/customer/profile/`,
      { withCredentials: true }
    );
    console.log(res.data);

    return res?.data;
  } catch (error: any) {
    console.log(error);
  }
};

export default GetProfile;
