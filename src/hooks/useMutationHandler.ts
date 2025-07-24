import { useMutation, useQueryClient, QueryKey } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";

type UseMutationHandlerOptions<TData, TVariables> = {
  mutationFn: (data: TVariables) => Promise<TData>;
  queryKey?: QueryKey | QueryKey[];
  successMessage?: string;
  errorMessage?: string;
  onSuccess?: (data: TData) => void;
  onError?: (error: unknown) => void;
};

export function useMutationHandler<TData, TVariables>({
  mutationFn,
  queryKey,
  successMessage,
  errorMessage,
  onSuccess,
  onError,
}: UseMutationHandlerOptions<TData, TVariables>) {
  const queryClient = useQueryClient();

  return useMutation<TData, unknown, TVariables>({
    mutationFn,
    onSuccess: (data) => {
      if (queryKey) {
        const keys = Array.isArray(queryKey[0])
          ? (queryKey as QueryKey[])
          : [queryKey as QueryKey];
        keys.forEach((key) => queryClient.invalidateQueries({ queryKey: key }));
      }
      if (successMessage) {
        toast.success(successMessage || "Operation successful");
      }
      if (onSuccess) onSuccess(data);
    },
    onError: (error: any) => {
      // const msg = errorMessage || error?.message || "Something went wrong";
      // const status = error?.status;

      // if (status === 400) {
      //   toast.error(`Bad Request: ${msg}`);
      // } else {
      //   toast.error(msg);
      // }
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message || "Axios error occurred");
      } else if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error(errorMessage || "Unknown error occurred");
      }

      if (onError) onError(error);
    },
  });
}
