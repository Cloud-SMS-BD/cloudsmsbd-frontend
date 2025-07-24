"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import clsx from "clsx";
import React from "react";
import { Pagination } from "./Pagination";
import { usePaginatedQuery } from "./usePaginatedQuery";
import { useQueryClient } from "@tanstack/react-query";
import { useAppDispatch } from "@/redux/hooks";
import { setSentSms } from "@/redux/allStateSlice";

type Column<T> = {
  label: string;
  accessor: keyof T | ((item: T) => React.ReactNode);
  className?: string;
};

interface PaginatedTableProps<T> {
  queryKey: string[];
  url: string;
  columns: Column<T>[];
  pageSize?: number;
  rowKey?: (item: T, index: number) => string | number;
  loadingRows?: number;
  className?: string;
  loadingClassName?: string;
  errorClassName?: string;
  emptyClassName?: string;
  customLoading?: React.ReactNode;
  customError?: React.ReactNode;
  customEmpty?: React.ReactNode;
}

export function PaginatedTable<T>({
  queryKey,
  url,
  columns,
  pageSize = 10,
  rowKey = (_, i) => i,
  className = "",
  loadingClassName = "text-center mt-4",
  errorClassName = "text-center mt-4 text-red-500",
  emptyClassName = "text-center mt-4 text-gray-500",
  customLoading,
  customError,
  customEmpty,
}: PaginatedTableProps<T>) {
const dispatch = useAppDispatch();

  const queryClient = useQueryClient();

  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = usePaginatedQuery<T>(
    url,
    page,
    pageSize,
    [...queryKey, page]
  );
  useEffect(() => {
    if (!data) return;

    const hasPendingStatus = data.results.some(
      (item: any) =>
        item.status === "QUEUED" ||
        item.status === "PROCESSING" ||
        item.status === "SENDING"
    );
    dispatch(setSentSms(data.count));
    if (hasPendingStatus) {
      const interval = setInterval(() => {
        queryClient.invalidateQueries({ queryKey: ["all-sms-list"] });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [data, queryClient, dispatch]);

  const renderCell = (item: T, column: Column<T>) => {
    if (typeof column.accessor === "function") {
      return column.accessor(item);
    }
    return (item as any)[column.accessor];
  };

  if (isLoading) {
    return (
      <div className={loadingClassName}>
        {customLoading ?? (
          <Loader className="animate-spin inline-block text-gray-500" />
        )}
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className={errorClassName}>
        {customError ?? <p>Error loading data.</p>}
      </div>
    );
  }

  if (data.results.length === 0) {
    return (
      <div className={emptyClassName}>
        {customEmpty ?? <p>No data available.</p>}
      </div>
    );
  }

  return (
    <div className={clsx("space-y-4", className)}>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((col, i) => (
              <TableHead key={i} className={`${col.className} font-semibold`}>
                {col.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.results.map((item, i) => (
            <TableRow key={rowKey(item, i)}>
              {columns.map((col, j) => (
                <TableCell key={j} className={col.className}>
                  {renderCell(item, col)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination
        currentPage={page}
        pageSize={pageSize}
        totalCount={data.count}
        onPageChange={setPage}
      />
    </div>
  );
}
