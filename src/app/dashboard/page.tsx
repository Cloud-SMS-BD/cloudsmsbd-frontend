"use client";
import AnalyticsCard from "@/components/dashboard/analytics/AnalyticsCard";
import PieChartComponent from "@/components/dashboard/analytics/PieChart";
import AllSmsListTable from "@/components/dashboard/SendSms/AllSmsList";
import { selectAvailableSms, selectSentSms } from "@/redux/allStateSlice";
import { useAppSelector } from "@/redux/hooks";
const OverviewPage = () => {
  const dashboardData = {
    available_sms: useAppSelector(selectAvailableSms),
    sms_sent: useAppSelector(selectSentSms),
  };
  const analyticsData = [
    {
      id: 1,
      title: "Available Sms",
      value: dashboardData?.available_sms,
    },
    {
      id: 2,
      title: "Sms Sent",
      value: dashboardData?.sms_sent,
    },
  ];

  return (
    <div className="container mx-auto max-w-6xl p-6">
      <h1 className="text-3xl font-bold mb-6">📊 SMS Analytics</h1>
      {/* Pie Chart */}
      <PieChartComponent analyticsData={analyticsData} />
      {/* Analytics Cards */}
      <AnalyticsCard analyticsData={analyticsData} />
      {/* Recent Sms */}
      <div className="mt-4">
        <AllSmsListTable />
      </div>
    </div>
  );
};

export default OverviewPage;
