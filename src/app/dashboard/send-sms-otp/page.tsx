import AllSmsListTable from "@/components/dashboard/SendSms/AllSmsList";
import SendSMS from "@/components/dashboard/SendSms/SendSms";

const Page = () => {
  return (
    <div className="min-h-screen  p-6 flex flex-col items-center space-y-8">
      <SendSMS />
      <AllSmsListTable />
    </div>
  );
};

export default Page;
