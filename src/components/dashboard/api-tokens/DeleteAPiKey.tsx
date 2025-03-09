"use client";
import { DeleteApiKeyAction } from "@/actions/api-tokens/DeleteApiToken";
import { Button } from "@/components/ui/button";
import { setApiTokenRefresh } from "@/redux/allStateSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Trash } from "lucide-react";
import { useActionState, useEffect } from "react";

const DeleteAPiKeyButton = () => {
  const dispatch = useAppDispatch();
  const [, action, isPending] = useActionState(DeleteApiKeyAction, {
    errors: {},
  });
  
  useEffect(() => {
    if (!isPending) {
      dispatch(setApiTokenRefresh());
    }
  }, [isPending, dispatch]);
  return (
    <form action={action}>
      <Button
        disabled={isPending}
        size={"sm"}
        className="bg-red-600 dark:bg-red-700 text-white"
      >
        <Trash size={16} />
      </Button>
    </form>
  );
};

export default DeleteAPiKeyButton;
