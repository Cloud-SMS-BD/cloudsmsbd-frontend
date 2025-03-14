"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Check, Clipboard, Code2 } from "lucide-react";

const TabsData = [
  { language: "javascript", content: `Javascript` },
  { language: "typescript", content: `TypeScript` },
  { language: "python", content: `Python` },
];

const CodeTabs = () => {
  const [activeTab, setActiveTab] = useState(TabsData[0].language);

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <Card className="w-full max-w-[700px] shadow-lg pb-2">
        <CardHeader className="rounded-t-lg border-b">
          <div className="flex items-center justify-between pb-4">
            <CardTitle className="flex items-center gap-2">
              <Code2 size={20} />
              <span>Code Example</span>
            </CardTitle>
            {/* Copy Code Button */}
            <CopyCode
              code={
                TabsData.find((item) => item.language === activeTab)?.content ||
                ""
              }
            />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Tabs
            defaultValue={TabsData[0].language}
            onValueChange={setActiveTab}
            className="w-full"
          >
            {/* Tab Content */}
            {TabsData.map((item) => (
              <TabsContent
                key={item.language}
                value={item.language}
                className="m-0 p-0"
              >
                <pre className="p-4 overflow-x-auto text-gray-800 dark:text-gray-200 text-sm font-mono min-h-[200px] max-h-[400px]">
                  <code className="dark:text-green-300 text-green-600">
                    {item.content}
                  </code>
                </pre>
              </TabsContent>
            ))}

            {/* Tab List */}
            <TabsList className="w-full grid grid-cols-3 rounded-none border-t bg-transparent">
              {TabsData.map((item) => (
                <TabsTrigger
                  key={item.language}
                  value={item.language}
                  className={cn(
                    "rounded-md data-[state=active]:bg-gray-100 cursor-pointer dark:data-[state=active]:bg-slate-800 data-[state=active]:shadow-none",
                    "transition-all duration-200"
                  )}
                >
                  {item.language}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default CodeTabs;

const CopyCode = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Button
      onClick={handleCopy}
      variant="outline"
      size="sm"
      className="h-8 gap-1.5 transition-all duration-200 hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {copied ? (
        <>
          <Check size={16} className="text-green-500" />
          <span className="text-sm">Copied</span>
        </>
      ) : (
        <>
          <Clipboard size={16} />
          <span className="text-sm">Copy</span>
        </>
      )}
    </Button>
  );
};
