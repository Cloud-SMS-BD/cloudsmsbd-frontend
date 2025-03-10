"use client";

import {
  BookOpen,
  KeyRound,
  LayoutDashboard,
  MessageSquareMore,
} from "lucide-react";
import * as React from "react";

import { AppSidebarContent } from "@/components/dashboard/AppSidebar/AppSidebarContent";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar";

import { AppSidebarFooter } from "./AppSidebarFooter";
import { AppSidebarHeader } from "./AppSidebarHeader";
import { OtpAndSmsService } from "./AppSidebarSmsOrOtp";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { setOpenMobile ,openMobile,state} = useSidebar();
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* Header */}
      <SidebarHeader>
        <AppSidebarHeader />
      </SidebarHeader>
      {/* Content */}
      <SidebarContent>
        <AppSidebarContent setOpenMobile={setOpenMobile} items={data.navMain} openMobile={openMobile} />
        <OtpAndSmsService openMobile={openMobile} setOpenMobile={setOpenMobile} projects={data.projects} />
      </SidebarContent>
      {/* Footer */}
      <SidebarFooter>
        <AppSidebarFooter state={state} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "Analytics",
          url: "/dashboard",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      isActive: true,
      items: [
        {
          title: "Introduction",
          url: "/dashboard/doc/introduction",
        },
        {
          title: "API Guide",
          url: "/dashboard/doc/api-guide",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Send Msg or Otp",
      url: "/dashboard/send-sms-otp",
      icon: MessageSquareMore,
    },
    {
      name: "Api Token",
      url: "/dashboard/api-tokens",
      icon: KeyRound,
    },
  ],
};
