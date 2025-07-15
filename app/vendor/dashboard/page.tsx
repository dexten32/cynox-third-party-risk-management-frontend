"use client";

import { useState } from "react";
import VendorInfoPanel from "@/components/vendor/VendorInfoPanel";
import VendorStatus from "@/components/vendor/VendorStatus";
import VendorQuestionnaire from "@/components/vendor/VendorQuestionnaire";
import { Button } from "@/components/ui/button";

export default function VendorDashboardPage() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "questionnaire">(
    "dashboard"
  );

  // Dummy vendor data (replace with real data later)
  const vendorInfo: {
    name: string;
    email: string;
    client: string;
    questionnaireStatus:
      | "Not Started"
      | "Incomplete"
      | "Complete"
      | "Submitted";
  } = {
    name: "John Vendor",
    email: "vendor@example.com",
    client: "Acme Corp",
    questionnaireStatus: "Incomplete", // Not Started | Incomplete | Complete | Submitted
  };

  return (
    <div className="flex flex-col max-w-4xl mx-auto min-h-[90dvh] pt-24 px-2 sm:px-4 space-y-6">
      {/* Vendor Info Section */}
      <VendorInfoPanel info={vendorInfo} />

      {/* Toggle Buttons */}
      <div className="flex gap-4">
        <Button
          variant={activeTab === "dashboard" ? "default" : "secondary"}
          onClick={() => setActiveTab("dashboard")}
        >
          Dashboard
        </Button>
        <Button
          variant={activeTab === "questionnaire" ? "default" : "secondary"}
          onClick={() => setActiveTab("questionnaire")}
          disabled={vendorInfo.questionnaireStatus === "Submitted"} // Lock after submission
        >
          Questionnaire
        </Button>
      </div>

      {/* Conditional Content */}
      {activeTab === "dashboard" ? (
        <VendorStatus questionnaireStatus={vendorInfo.questionnaireStatus} />
      ) : (
        <VendorQuestionnaire />
      )}
    </div>
  );
}
