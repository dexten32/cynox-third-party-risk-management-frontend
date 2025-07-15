"use client";

import ClientInfoPanel from "@/components/client/ClientInfoPanel";
import ClientVendorSidebar from "@/components/client/ClientVendorSidebar";
import VendorDetailsPanel from "@/components/vendor/VendorDetailsPanel";
import { useState } from "react";

export default function ClientDashboard() {
  const [selectedVendor, setSelectedVendor] = useState<string | null>(null);

  // Dummy client data (replace with real data later)
  const clientInfo = {
    name: "Acme Corp",
    email: "client@acme.com",
    totalVendors: 5,
    completedVendors: 3,
  };

  return (
    <div className="flex min-h-[90dvh] pt-24 px-2 sm:px-4 justify-center">
      <div className="flex-1 justify-between max-w-4xl mr-6 space-y-6">
        {/* Client Info Top Panel */}
        <ClientInfoPanel
          name={clientInfo.name}
          email={clientInfo.email}
          totalVendors={clientInfo.totalVendors}
          completedVendors={clientInfo.completedVendors}
        />

        {/* Conditional Vendor Details / Placeholder */}
        {selectedVendor ? (
          <VendorDetailsPanel selectedVendor={selectedVendor} />
        ) : (
          <div className="border border-border rounded-xl bg-background p-6 shadow-md w-full min-h-[300px] flex items-center justify-center">
            <p className="text-muted-foreground text-center">
              Select a vendor from the sidebar to view their summary and
              questionnaire details.
            </p>
          </div>
        )}
      </div>

      <ClientVendorSidebar setSelectedVendor={setSelectedVendor} />
    </div>
  );
}
