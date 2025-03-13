"use client";
import AnalyticsCard from "@/components/dashboard/analytics/AnalyticsCard";
import PieChartComponent from "@/components/dashboard/analytics/PieChart";
import { TrySendingMessage } from "@/components/dashboard/analytics/TrySendingMessageModal";
import AllSmsListTable from "@/components/dashboard/SendSms/AllSmsList";
import { Button } from "@/components/ui/button";
import { selectAvailableSms, selectSentSms } from "@/redux/allStateSlice";
import { useAppSelector } from "@/redux/hooks";
import { Banknote } from "lucide-react";
import Link from "next/link";
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
    <div className="container mx-auto max-w-6xl p-3">
      <h1 className="text-3xl font-bold mb-6">📊 SMS Analytics</h1>
      {/* Pie Chart */}
      <PieChartComponent analyticsData={analyticsData} />
      {/* Analytics Cards */}
      <AnalyticsCard analyticsData={analyticsData} />
      {/* Send Sms Modal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TrySendingMessage />
        <Link href="/dashboard/purchase-and-history/purchase-plan">
          <Button className="mt-4 py-6 bg-sky-600 hover:bg-sky-600 text-white w-full gap-2">
            <Banknote size={"25"} />
            Purchase Sms
          </Button>
        </Link>
      </div>
      {/* Recent Sms */}
      <div className="mt-4">
        <AllSmsListTable />
      </div>
    </div>
  );
};

export default OverviewPage;
