"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const dummyData = [
  {
    client: "Client A",
    vendors: ["Vendor 1", "Vendor 2"],
  },
  {
    client: "Client B",
    vendors: ["Vendor 3", "Vendor 4"],
  },
  {
    client: "Client C",
    vendors: ["Vendor 5"],
  },
];

export default function ClientVendorSidebar({
  setSelectedVendor,
}: {
  setSelectedVendor: (vendor: string) => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleClient = (clientName: string) => {
    setExpanded(expanded === clientName ? null : clientName);
  };

  return (
    <aside className="w-1/5 min-w-[200px] bg-background border border-border rounded-xl shadow-md p-4 overflow-y-auto min-h-[70dvh]">
      <h3 className="text-lg font-semibold mb-4">Clients & Vendors</h3>

      <div className="space-y-2">
        {dummyData.map(({ client, vendors }) => (
          <div key={client}>
            <button
              onClick={() => toggleClient(client)}
              className="w-full flex items-center justify-between text-foreground font-medium hover:bg-muted px-3 py-2 rounded-md transition"
            >
              {client}
              {expanded === client ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>

            {expanded === client && (
              <ul className="ml-4 pl-5 mt-1 text-muted-foreground text-sm">
                {vendors.map((vendor) => (
                  <li
                    key={vendor}
                    className="cursor-pointer hover:text-foreground transition pl-4 list-disc"
                    onClick={() => setSelectedVendor(vendor)}
                  >
                    {vendor}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
}
