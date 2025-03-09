"use client";

import {
  SidebarMenu,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import Profile from "../../Profile/Profile";
import { useAppSelector } from "@/redux/hooks";
import { selectGetProfile } from "@/redux/allStateSlice";

export function AppSidebarFooter() {
  const { state } = useSidebar();
  const user = useAppSelector(selectGetProfile);

  return (
    <SidebarMenu>
      <SidebarMenuItem className="flex items-center gap-3">
        <Profile />
        {state === "expanded" && (
          <div className="flex flex-col">
            <span className="font-medium text-sm">{user?.name}</span>
            <p className="text-xs hover:underline">{user?.email}</p>
          </div>
        )}
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
