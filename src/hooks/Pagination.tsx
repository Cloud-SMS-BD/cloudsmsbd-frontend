import { Button } from "@/components/ui/button";
import { LucideChevronLeft } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  pageSize: number;
  totalCount: number;
  onPageChange: (page: number) => void;
}

export function Pagination({
  currentPage,
  pageSize,
  totalCount,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalCount / pageSize);

  if (totalPages <= 1) return null;

  return (
    <div className="flex gap-2 items-center justify-center mt-4">
      <Button
        size={"icon"}
        variant={"outline"}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        <LucideChevronLeft className="h-4 w-4" />
      </Button>

      <Button variant={"outline"} size={"sm"} className="text-sm">
        {currentPage} / {totalPages}
      </Button>

      <Button
        size={"icon"}
        variant={"outline"}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        <LucideChevronLeft className="h-4 w-4 transform rotate-180" />
      </Button>
    </div>
  );
}
