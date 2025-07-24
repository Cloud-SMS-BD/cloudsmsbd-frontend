import { QueryKey, useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/request";

interface PaginatedResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
  queryKey: QueryKey;
}

export function usePaginatedQuery<T>(
  url: string,
  page: number,
  pageSize: number = 10,
  queryKey: QueryKey
) {
  const fullUrl = url.includes("?")
    ? `${url}&p=${page}&page_size=${pageSize}`
    : `${url}?p=${page}&page_size=${pageSize}`;

  return useQuery<PaginatedResponse<T>>({
    queryKey: queryKey,
    queryFn: () => fetcher(fullUrl),
  });
}
