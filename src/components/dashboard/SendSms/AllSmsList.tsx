"use client";
import AllSmsList from "@/actions/send-sms-otp/AllSmsList";
import {
  selectAllSmsList,
  selectSendSmsRefresh,
  setAllSmsList,
  setSentSms,
} from "@/redux/allStateSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { MessageSquareMore } from "lucide-react";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";
import TableData from "./TableData";

const AllSmsListTable = () => {
  const dispatch = useAppDispatch();
  const refresh = useAppSelector(selectSendSmsRefresh);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = () => {
      AllSmsList(currentPage).then((e) => {
        dispatch(setAllSmsList(e));
        dispatch(setSentSms(e.count));
      });
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch, refresh, currentPage]);

  const allSmsList = useAppSelector(selectAllSmsList);

  return (
    <div className="space-y-6 w-full px-4">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <MessageSquareMore size={25} />
        <span>SMS List</span>
      </h1>
      <div className="overflow-x-auto bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg">
        <TableData allSmsList={allSmsList} />

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          allSmsList={allSmsList}
        />
      </div>
    </div>
  );
};

export default AllSmsListTable;
