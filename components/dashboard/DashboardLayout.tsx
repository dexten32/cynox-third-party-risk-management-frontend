import { FloatingNavbar } from "./navbar";
import { ReactNode } from "react";

export function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <FloatingNavbar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
