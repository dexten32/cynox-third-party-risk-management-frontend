"use client";

import { useState } from "react";

export default function VendorDetailsPanel({
  selectedVendor,
}: {
  selectedVendor: string | null;
}) {
  const [activeView, setActiveView] = useState<"dashboard" | "questionnaire">(
    "dashboard"
  );

  if (!selectedVendor) {
    return (
      <div className="flex items-center justify-center h-[50vh] border border-border rounded-xl bg-background text-muted-foreground">
        Nothing to show here
      </div>
    );
  }

  return (
    <div className="border border-border rounded-xl bg-background p-6 shadow-md w-full">
      {/* View Switcher */}
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setActiveView("dashboard")}
          className={`px-4 py-2 rounded-md ${
            activeView === "dashboard"
              ? "bg-accent text-accent-foreground"
              : "bg-muted text-muted-foreground"
          }`}
        >
          Dashboard
        </button>

        <button
          onClick={() => setActiveView("questionnaire")}
          className={`px-4 py-2 rounded-md ${
            activeView === "questionnaire"
              ? "bg-accent text-accent-foreground"
              : "bg-muted text-muted-foreground"
          }`}
        >
          Questionnaire
        </button>
      </div>

      {/* Vendor Content */}
      {activeView === "dashboard" ? (
        <div>
          <h2 className="text-lg font-semibold mb-2">Vendor Summary</h2>
          <p className="text-muted-foreground mb-2">
            Showing summary details for <strong>{selectedVendor}</strong>.
          </p>
          {/* Add summary data here */}
        </div>
      ) : (
        <div>
          <h2 className="text-lg font-semibold mb-2">Vendor Questionnaire</h2>
          <p className="text-muted-foreground mb-2">
            Showing questionnaire answers for <strong>{selectedVendor}</strong>.
          </p>
          {/* Add questionnaire content here */}
        </div>
      )}
    </div>
  );
}
