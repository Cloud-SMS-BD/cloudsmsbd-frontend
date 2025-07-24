"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PaginatedTable } from "@/hooks/PaginatedTable";
import { useQueryClient } from "@tanstack/react-query";
import { MessageSquareMore, RefreshCcw } from "lucide-react";
import { useState } from "react";

const AllSmsListTable = () => {
  const formatRecipient = (recipient: string) => {
    return recipient.startsWith("+88") ? recipient.slice(3) : recipient;
  };
  const truncateMessage = (message: string, maxLength: number = 30) => {
    return message?.length > maxLength
      ? message.substring(0, maxLength) + "..."
      : message;
  };
  const formatDate = (dateString: string) => {
    return dateString ? new Date(dateString).toLocaleString() : "Not available";
  };
  const columns = [
    {
      label: "Recipient",
      accessor: (item: any) => formatRecipient(item.recipient),
    },
    {
      label: "Message",
      accessor: (item: any) => truncateMessage(item.message),
    },
    {
      label: "Created At",
      accessor: (item: any) => formatDate(item.created_at),
    },
    { label: "Sent At", accessor: (item: any) => formatDate(item.sent_at) },
    {
      label: "Status",
      accessor: (item: any) => (
        <Badge
          className={`text-white ${
            item.status === "SENT"
              ? "bg-green-500"
              : item.status === "QUEUED"
              ? "bg-yellow-500"
              : "bg-red-500"
          }`}
        >
          {item.status}
        </Badge>
      ),
      className: "text-center",
    },
  ];
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();
  
  const handleRefresh = () => {
    setLoading(true);
   try {
     queryClient.invalidateQueries({ queryKey: ["all-sms-list"] });
   } catch (error) {
    console.log("Error refreshing SMS list:", error);
   }finally {
     setTimeout(() => {
      setLoading(false);
     }, 200);
   }
  };
  return (
    <div className="w-full mt-4">
      <h1 className="text-2xl md:text-3xl font-semibold flex justify-center items-center gap-2">
        <MessageSquareMore size={25} />
        <span>SMS List </span>
        <Button
          disabled={ loading}
          variant="outline"
          size={"icon"}
          className="ml-auto"
          onClick={handleRefresh}
        >
          <RefreshCcw className={`cursor-pointer ${loading ? "animate-spin" : ""}`} />
        </Button>
      </h1>
      {/* Table */}
      <div className="border p-4 rounded-lg shadow-md my-4">
        <PaginatedTable
          url="/customer/all-sms/"
          queryKey={["all-sms-list"]}
          columns={columns}
          pageSize={10}
          rowKey={(item) => String(item?.id)}
          customEmpty={
            <p className="text-center text-gray-500">
              No results found for this course.
            </p>
          }
        />
      </div>
    </div>
  );
};

export default AllSmsListTable;
