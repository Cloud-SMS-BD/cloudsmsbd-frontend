import { Badge } from "@/components/ui/badge";
import {
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Table,
} from "@/components/ui/table";

const TableData = ({ allSmsList }: { allSmsList: any }) => {
  const truncateMessage = (message: string, maxLength: number = 30) => {
    return message?.length > maxLength
      ? message.substring(0, maxLength) + "..."
      : message;
  };
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <Table className="overflow-x-auto w-full">
      <TableCaption>List of Sent SMS</TableCaption>
      <TableHeader>
        <TableRow className="bg-gray-100 dark:bg-gray-800">
          <TableHead>Recipient</TableHead>
          <TableHead>Message</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Sent At</TableHead>
          <TableHead className="text-center">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {allSmsList?.results?.length === 0 ? (
          <TableRow>
            <TableCell colSpan={5} className="text-center font-medium">
              No SMS data available
            </TableCell>
          </TableRow>
        ) : (
          allSmsList?.results?.map((item: any) => (
            <TableRow key={item?.id}>
              <TableCell className="font-medium">
                {item?.recipient.startsWith("+88")
                  ? item.recipient.slice(3)
                  : item.recipient}
              </TableCell>
              <TableCell>{truncateMessage(item?.message)}</TableCell>
              <TableCell>{formatDate(item?.created_at)}</TableCell>
              <TableCell>{formatDate(item?.sent_at)}</TableCell>
              <TableCell className="text-center">
                <Badge
                  className={`${
                    item?.status === "SENT"
                      ? "bg-green-500"
                      : item.status === "QUEUED"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  } text-white`}
                >
                  {item?.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};

export default TableData;
