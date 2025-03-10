"use client";
import GetApiToken from "@/actions/api-tokens/GetApiToken";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  selectApiToken,
  selectApiTokenRefresh,
  setApiToken,
} from "@/redux/allStateSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Clipboard } from "lucide-react";
import { useEffect } from "react";
import DeleteAPiKeyButton from "./DeleteAPiKey";
import { toast } from "sonner";

const TokensDataTable = () => {
  const dispatch = useAppDispatch();
  const refresh = useAppSelector(selectApiTokenRefresh);

  useEffect(() => {
    GetApiToken().then((e) => {
      dispatch(setApiToken(e));
    });
  }, [dispatch, refresh]);

  const apiToken = useAppSelector(selectApiToken);



  return (
    <Table className="mt-6">
      <TableCaption>API Key</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Token</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {!apiToken ? (
          <TableRow>
            <TableCell colSpan={2} className="text-center">
              No API Key found
            </TableCell>
          </TableRow>
        ) : (
          <TableRow>
            <TableCell className="text-xs md:text-base">{apiToken}</TableCell>
            <TableCell className="text-right space-x-2 flex items-center justify-end">
              <CopyToken token={apiToken} />
              <DeleteAPiKeyButton />
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TokensDataTable;

const CopyToken = ({ token }: { token: string }) => {
  return (
    <Button
      onClick={() => {
        navigator.clipboard.writeText(token);
        toast.success("Copied to clipboard");
      }}
      className="p-2"
      variant="outline"
      size={"sm"}
    >
      <Clipboard size={16} />
    </Button>
  );
};
