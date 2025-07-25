// components/forms/CompanyForm.tsx
"use client";

import { useState } from "react";
import { useAuth } from "@/components/hooks/AuthService";
import { useRouter } from "next/navigation";

export function CompanyForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const login = useAuth().login;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await login(email, password, "COMPANY");
      router.push("/company/dashboard");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      alert("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Company Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="input"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-lg text-white bg-[var(--accent)]"
      >
        {loading ? "Logging in..." : "Login as Company"}
      </button>
    </form>
  );
}
