"use client";
import Image from "next/image";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { User, LogOut } from "lucide-react";
import { ThemeDropdown } from "@/components/dashboard/ThemeDropdown";

export function FloatingNavbar() {
  return (
    <div className="fixed top-3 left-1/2 transform -translate-x-1/2 z-50 bg-background/70 backdrop-blur-md border border-border rounded-full shadow-lg px-6 py-3 flex items-center gap-6 max-w-[600px] w-full justify-between">
      {/* Left - Logo & Name */}
      <div className="flex items-center gap-3">
        <Image src="/logo.svg" alt="Company Logo" width={32} height={32} />
        <span className="font-bold text-lg text-foreground">
          CYNOX SECURITY LLP
        </span>
      </div>

      {/* Right - ThemeSwitcher & Profile */}
      <div className="flex items-center gap-3">
        <ThemeDropdown />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem onClick={() => console.log("logout")}>
              <LogOut className="h-4 w-4 mr-2" /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
