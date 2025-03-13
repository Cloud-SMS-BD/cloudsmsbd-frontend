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
    <div className="w-full">
      <h1 className="text-2xl md:text-3xl font-semibold flex justify-center items-center gap-2">
        <MessageSquareMore size={25} />
        <span>SMS List</span>
      </h1>
      {/* Table */}
      <div className="overflow-x-auto max-w-7xl mx-auto w-full border mt-4">
        <TableData allSmsList={allSmsList} />
      </div>
      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        data={allSmsList}
      />
    </div>
  );
};

export default AllSmsListTable;
