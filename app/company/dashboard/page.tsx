"use client";

import { useState } from "react";
import { UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import ClientVendorSidebar from "@/components/client/ClientVendorSidebar";
import VendorDetailsPanel from "@/components/vendor/VendorDetailsPanel";
import PendingUsersPanel from "@/components/company/pendingUserPanel";

export default function CompanyDashboard() {
  const [selectedVendor, setSelectedVendor] = useState<string | null>(null);
  const [activePanel, setActivePanel] = useState<"summary" | "pending">(
    "summary"
  );

  return (
    <div className="flex min-h-[90dvh] pt-24 px-2 sm:px-4 justify-center">
      {/* Left Side: Main Content */}
      <div className="flex-1 justify-between max-w-4xl mr-6 space-y-6">
        {/* Dashboard Navigation */}
        <div className="flex gap-4 mb-4 border-b border-gray-200">
          {" "}
          <Button
            variant="ghost"
            onClick={() => setActivePanel("summary")}
            className={`relative px-4 py-2 ${
              activePanel === "summary"
                ? "text-blue-600 font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            Summary
          </Button>
          <Button
            variant="ghost"
            onClick={() => setActivePanel("pending")}
            className={`relative px-4 py-2 ${
              activePanel === "pending"
                ? "text-blue-600 font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            User Approval
          </Button>
        </div>

        {activePanel === "summary" ? (
          <>
            {/* Upload Section */}
            <div className="border border-border rounded-xl bg-[var(--bg)] p-6 shadow-md w-full">
              <h2 className="text-xl font-semibold text-foreground mb-2">
                Upload Vendor Summary Report
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Upload the .docx summary file here to auto-process vendor risk
                data.
              </p>
              <Button variant="default">
                <UploadCloud className="w-4 h-4 mr-2" />
                Upload
              </Button>
            </div>

            {/* Vendor Details Panel */}
            <VendorDetailsPanel selectedVendor={selectedVendor} />
          </>
        ) : (
          <PendingUsersPanel />
        )}
      </div>

      {/* Right Side: Clients & Vendors Sidebar */}
      <ClientVendorSidebar setSelectedVendor={setSelectedVendor} />
    </div>
  );
}
