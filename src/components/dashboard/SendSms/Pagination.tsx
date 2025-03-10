import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({
  setCurrentPage,
  allSmsList,
  currentPage,
}: {
  setCurrentPage: any;
  allSmsList: any;
  currentPage: any;
}) => {
  return (
    <div className="flex justify-center gap-4 mb-4 mt-3">
      <Button
        disabled={allSmsList?.previous === null}
        variant={"outline"}
        size={"sm"}
        onClick={() => setCurrentPage((prev: any) => Math.max(prev - 1, 1))}
      >
        <ChevronLeft />
      </Button>
      <span className="font-medium">
        {currentPage} / {Math.ceil(allSmsList?.count / 10)}
      </span>
      <Button
        disabled={allSmsList?.next === null}
        variant={"outline"}
        size={"sm"}
        onClick={() => setCurrentPage((prev: any) => prev + 1)}
      >
        <ChevronRight />
      </Button>
    </div>
  );
};

export default Pagination;
