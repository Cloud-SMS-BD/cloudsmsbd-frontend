import axios from "axios";

const PurchaseHistoryAction = async (page: number = 1) => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/customer/purchase/?p=${page}`,
      { withCredentials: true }
    );
    return res?.data;
  } catch {}
};
export default PurchaseHistoryAction;
