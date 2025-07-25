"use client";

import { useState, useEffect } from "react";

interface Vendor {
  id: string;
  name: string;
  email: string;
  // Add more fields as needed
}

export default function VendorDetailsPanel({
  selectedVendor,
}: {
  selectedVendor: string | null;
}) {
  const [activeView, setActiveView] = useState<"dashboard" | "questionnaire">(
    "dashboard"
  );
  const [vendor, setVendor] = useState<Vendor | null>(null);

  // Fetch vendor details when selectedVendor changes
  useEffect(() => {
    if (!selectedVendor) {
      setVendor(null);
      return;
    }

    const fetchVendor = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/users/${selectedVendor}`
        );
        const data = await res.json();
        setVendor(data);
      } catch (err) {
        console.error("Failed to fetch vendor details", err);
      }
    };

    fetchVendor();
  }, [selectedVendor]);

  if (!selectedVendor || !vendor) {
    return (
      <div className="flex items-center justify-center h-[50vh] border border-border rounded-xl bg-[var(--bg)] text-[var(--fg)]">
        Nothing to show here
      </div>
    );
  }

  return (
    <div className="border border-border rounded-xl bg-[var(--bg)] p-6 shadow-md w-full">
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
            Showing summary details for <strong>{vendor.name}</strong>.
          </p>
          {/* Add summary data here */}
        </div>
      ) : (
        <div>
          <h2 className="text-lg font-semibold mb-2">Vendor Questionnaire</h2>
          <p className="text-muted-foreground mb-2">
            Showing questionnaire answers for <strong>{vendor.name}</strong>.
          </p>
          {/* Add questionnaire content here */}
        </div>
      )}
    </div>
  );
}
