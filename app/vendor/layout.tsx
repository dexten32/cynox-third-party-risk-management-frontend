// app/dashboard/company/layout.tsx

import { FloatingNavbar } from "@/components/dashboard/navbar";
import { ReactNode } from "react";

export default function VendorLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <FloatingNavbar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
