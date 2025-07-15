"use client";

import { useState } from "react";
import { UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import ClientVendorSidebar from "@/components/dashboard/ClientVendorSidebar";
import VendorDetailsPanel from "@/components/dashboard/VendorDetailsPanel";

export default function CompanyDashboard() {
  const [selectedVendor, setSelectedVendor] = useState<string | null>(null);

  return (
    <div className="flex min-h-[90dvh] pt-24 px-2 sm:px-4 justify-center">
      {/* Left Side: Main Content */}
      <div className="flex-1 justify-between max-w-4xl mr-6 space-y-6">
        {/* Upload Section */}
        <div className="border border-border rounded-xl bg-background p-6 shadow-md w-full">
          <h2 className="text-xl font-semibold text-foreground mb-2">
            Upload Vendor Summary Report
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Upload the .docx summary file here to auto-process vendor risk data.
          </p>
          <Button variant="default">
            <UploadCloud className="w-4 h-4 mr-2" />
            Upload
          </Button>
        </div>

        {/* Vendor Details Panel (Dynamic content) */}
        <VendorDetailsPanel selectedVendor={selectedVendor} />
      </div>

      {/* Right Side: Clients & Vendors Sidebar */}
      <ClientVendorSidebar setSelectedVendor={setSelectedVendor} />
    </div>
  );
}
