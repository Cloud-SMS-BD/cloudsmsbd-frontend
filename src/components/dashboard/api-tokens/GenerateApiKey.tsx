"use client";
import { GenerateApiKeyAction } from "@/actions/api-tokens/GenerateApiToken";
import { Button } from "@/components/ui/button";
import { setApiTokenRefresh } from "@/redux/allStateSlice";
import { useAppDispatch } from "@/redux/hooks";
import { Loader, Plus } from "lucide-react";
import { useActionState, useEffect } from "react";
const GenerateApiKey = () => {
  const dispatch = useAppDispatch();
  const [, action, isPending] = useActionState(GenerateApiKeyAction, {
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
        type="submit"
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2"
        disabled={isPending}
      >
        <Plus />
        {isPending && <Loader className="animate-spin" />}
        Generate API Key
      </Button>
    </form>
  );
};

export default GenerateApiKey;
