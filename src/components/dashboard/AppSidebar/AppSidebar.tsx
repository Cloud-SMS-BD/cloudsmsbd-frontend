"use client";

import {
  Banknote,
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
import { SingleService } from "./AppSidebarSmsOrOtp";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { setOpenMobile, openMobile, state } = useSidebar();
  return (
    <Sidebar collapsible="icon" {...props}>
      {/* Header */}
      <SidebarHeader>
        <AppSidebarHeader />
      </SidebarHeader>
      {/* Content */}
      <SidebarContent>
        <SingleService
        title={"Analytics"}
          openMobile={openMobile}
          setOpenMobile={setOpenMobile}
          projects={data.dashboardPage}
        />
        <AppSidebarContent
          setOpenMobile={setOpenMobile}
          items={data.navMain}
          openMobile={openMobile}
        />
        <SingleService
          title={"OTP & SMS Service"}
          openMobile={openMobile}
          setOpenMobile={setOpenMobile}
          projects={data.projects}
        />
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
  dashboardPage: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
    },
  ],
  navMain: [
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
    {
      title: "Purchase & History",
      url: "#",
      icon: Banknote,
      isActive: true,
      items: [
        {
          title: "Purchase Plan",
          url: "/dashboard/purchase-and-history/purchase-plan",
        },
        {
          title: "Purchase History",
          url: "/dashboard/purchase-and-history/purchase-history",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Send SMS",
      url: "/dashboard/send-sms-otp",
      icon: MessageSquareMore,
    },
    {
      name: "API Token",
      url: "/dashboard/api-tokens",
      icon: KeyRound,
    },
  ],
};
