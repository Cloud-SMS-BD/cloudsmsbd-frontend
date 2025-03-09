// import { redirect } from "next/navigation";
import axios from "axios";
import { toast } from "sonner";

export const LogOutAction = async () => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/rest-auth/logout/`,
      {},
      {
        withCredentials: true,
      }
    );
    console.log(res.data);
    toast.success("You have been logged out");
    // redirect("/auth/login");
    return {};
  } catch (error) {
    toast.error("An error occurred");
    console.log(error);
  }
};
