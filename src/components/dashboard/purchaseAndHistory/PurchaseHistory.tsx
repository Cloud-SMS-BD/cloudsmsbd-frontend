"use client";
import {
    selectPurchaseHistory,
    setPurchaseHistory
} from "@/redux/allStateSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { History } from "lucide-react";
import { useEffect, useState } from "react";

import PurchaseHistoryAction from "@/actions/purchase/PurchaseHistory";
import Pagination from "../SendSms/Pagination";
import PurchaseDataTable from "./PurchaseDataTable";

const PurchaseHistorySection = () => {
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const purchaseHistory = useAppSelector(selectPurchaseHistory);

  useEffect(() => {
    const fetchData = () => {
      PurchaseHistoryAction(currentPage).then((e) => {
        dispatch(setPurchaseHistory(e));
      });
    };

    fetchData();
  }, [dispatch, currentPage]);

console.log(purchaseHistory)
  return (
    <div className="w-full">
      <h1 className="text-2xl md:text-3xl font-semibold flex justify-center items-center gap-2">
        <History size={25} />
        <span>Purchase History</span>
      </h1>
      {/* Table */}
      <div className="overflow-x-auto max-w-7xl mx-auto w-full border mt-4">
        <PurchaseDataTable data={purchaseHistory} />
      </div>
      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        data={purchaseHistory}
      />
    </div>
  );
};

export default PurchaseHistorySection;
