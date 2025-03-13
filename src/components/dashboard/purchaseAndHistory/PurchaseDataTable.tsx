import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const PurchaseDataTable = ({ data }: { data: any }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-gray-100 dark:bg-gray-800">
          <TableHead>Package Name</TableHead>
          <TableHead>Sms Quantity</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Transaction Id</TableHead>
          <TableHead className="text-center">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.results?.length === 0 ? (
          <TableRow>
            <TableCell colSpan={5} className="text-center font-medium">
              No Purchase data available
            </TableCell>
          </TableRow>
        ) : (
          data?.results?.map((item: any) => (
            <TableRow key={item?.id}>
              <TableCell className="font-medium">
                {item?.package_name}
              </TableCell>
              {item?.package_name === "business" ? (
                <>
                  <TableCell colSpan={3} className="text-center">
                  Please contact the admin for details
                  </TableCell>
                </>
              ) : (
                <>
                  <TableCell>{item?.sms_quantity}</TableCell>
                  <TableCell>{item?.total_price}</TableCell>
                  <TableCell>{item?.tranx_id}</TableCell>
                </>
              )}

              <TableCell className="text-center">
                <Badge
                  className={`${
                    item?.verified === true ? "bg-green-500" : "bg-red-500"
                  } text-white`}
                >
                  {item?.verified === true ? "Approved" : "Denied"}
                </Badge>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
};

export default PurchaseDataTable;
