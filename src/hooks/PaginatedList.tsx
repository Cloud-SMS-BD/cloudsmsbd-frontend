"use client";


import { ReactNode, useEffect, useState } from "react";
import { Pagination } from "./Pagination";
import { Loader } from "lucide-react";
import { usePaginatedQuery } from "./usePaginatedQuery";

interface PaginatedListProps<T> {
  queryKey: string[];
  itemsClassName?: string;
  loadingClassName?: string;
  errorClassName?: string;
  url: string;
  pageSize?: number;
  renderItem: (item: T, index?: number) => ReactNode;
  customLoading?: ReactNode;
  customError?: ReactNode;
  onDataLoaded?: (items: T[]) => void; // ✅ New prop
}

export function PaginatedList<T>({
  queryKey,
  loadingClassName = "text-center mt-4",
  itemsClassName,
  errorClassName = "text-center mt-4 text-red-500",
  url,
  pageSize = 10,
  renderItem,
  customLoading,
  customError,
  onDataLoaded, // ✅ New prop
}: PaginatedListProps<T>) {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = usePaginatedQuery<T>(
    url,
    page,
    pageSize,
    [...queryKey, page]
  );

  useEffect(() => {
    if (data?.results?.length && data.results.length > 0) {
      onDataLoaded?.(data.results);
    }
  }, [data, onDataLoaded]);
  if (isLoading)
    return (
      <div className={`${loadingClassName}`}>
        {customLoading ?? (
          <p>
            <Loader className="animate-spin" />
          </p>
        )}
      </div>
    );
  if (isError || !data)
    return (
      <div className={`${errorClassName}`}>
        {customError ?? <p>Error loading data.</p>}
      </div>
    );

  if (data.results.length === 0)
    return (
      <div className={`flex justify-center items-center `}>
        <p>No data available.</p>
      </div>
    );
  return (
    <div>
      <div className={`${itemsClassName}`}>
        {data.results.map((item, index) => renderItem(item, index))}
      </div>
      <Pagination
        currentPage={page}
        pageSize={pageSize}
        totalCount={data.count}
        onPageChange={setPage}
      />
    </div>
  );
}
