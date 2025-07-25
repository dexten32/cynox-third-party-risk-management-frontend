"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface User {
  id: string;
  name: string;
  email: string;
  contactNumber?: string;
  role: string;
}

export default function PendingUsersPanel() {
  const [users, setUsers] = useState<User[]>([]);
  const [loadingIds, setLoadingIds] = useState<string[]>([]);

  const fetchPending = async () => {
    const res = await fetch("/api/users/pending", { credentials: "include" });
    if (res.ok) setUsers(await res.json());
  };

  useEffect(() => {
    fetchPending();
  }, []);

  const updateStatus = async (id: string, status: "APPROVED" | "REJECTED") => {
    setLoadingIds((prev) => [...prev, id]);
    await fetch(`/api/users/${id}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ status }),
    });
    setLoadingIds((p) => p.filter((x) => x !== id));
    setUsers((u) => u.filter((x) => x.id !== id));
  };

  if (users.length === 0) {
    return <p className="p-6 text-gray-500">No pending users.</p>;
  }

  return (
    <div className="space-y-4 p-4">
      {users.map((u) => (
        <div
          key={u.id}
          className="flex items-center justify-between bg-white rounded-md p-4 shadow"
        >
          <div>
            <p className="font-medium">{u.name}</p>
            <p className="text-sm text-gray-500">{u.email}</p>
            {u.contactNumber && (
              <p className="text-sm text-gray-500">{u.contactNumber}</p>
            )}
            <p className="text-xs uppercase text-gray-400">{u.role}</p>
          </div>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              disabled={loadingIds.includes(u.id)}
              onClick={() => updateStatus(u.id, "REJECTED")}
            >
              {loadingIds.includes(u.id) ? "..." : "Reject"}
            </Button>
            <Button
              size="sm"
              variant="default"
              disabled={loadingIds.includes(u.id)}
              onClick={() => updateStatus(u.id, "APPROVED")}
            >
              {loadingIds.includes(u.id) ? "..." : "Approve"}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
