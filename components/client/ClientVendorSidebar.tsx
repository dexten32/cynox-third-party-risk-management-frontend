"use client";

import { useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

interface Props {
  setSelectedVendor: (vendorId: string) => void;
}

export default function ClientVendorSidebar({ setSelectedVendor }: Props) {
  const [clients, setClients] = useState<User[]>([]);
  const [vendors, setVendors] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/users/by-role");
        const data = await res.json();
        setClients(data.clients || []);
        setVendors(data.vendors || []);
      } catch (err) {
        console.error("Failed to fetch users", err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="w-80 border border-border rounded-xl bg-[var(--bg)] p-4 space-y-4 h-fit shadow-md">
      <div>
        <h3 className="text-lg font-semibold text-foreground mb-2">Clients</h3>
        <ul className="space-y-1 text-sm">
          {clients.map((client) => (
            <li key={client.id} className="text-muted-foreground">
              {client.name || client.email}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">
          Vendors
        </h3>
        <ul className="space-y-1 text-sm">
          {vendors.map((vendor) => (
            <li
              key={vendor.id}
              className="text-blue-600 hover:underline cursor-pointer"
              onClick={() => setSelectedVendor(vendor.id)}
            >
              {vendor.name || vendor.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
