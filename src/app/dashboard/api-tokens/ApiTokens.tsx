import GenerateApiKey from "@/components/dashboard/api-tokens/GenerateApiKey";
import TokensDataTable from "@/components/dashboard/api-tokens/TokensDataTable";
const ApiTokens = () => {
  return (
    <div className="container mx-auto max-w-4xl py-10 px-4">
      <div className="mb-8 ">
        <h1 className="text-3xl font-bold">API Tokens</h1>
        <p className="mt-4 text-gray-600 dark:text-slate-400">
          Manage your API tokens securely.You can generate, copy, and delete API
          tokens from this page.
        </p>
        <GenerateApiKey />
      </div>

      <TokensDataTable />
    </div>
  );
};

export default ApiTokens;
