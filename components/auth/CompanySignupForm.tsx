// components/forms/CompanySignupForm.tsx
"use client";

import { useState } from "react";
import { useAuth } from "@/components/hooks/AuthService";

export function CompanySignupForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const signup = useAuth().signup;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await signup(
        {
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          contactNumber: form.contactNumber,
          password: form.password,
        },
        "COMPANY"
      );
      setMessage("Company account created! Awaiting admin approval.");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        password: "",
      });
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setMessage("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
          className="input"
        />
        <input
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
          className="input"
        />
      </div>

      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Company Email"
        required
        className="input"
      />
      <input
        name="contactNumber"
        value={form.contactNumber}
        onChange={handleChange}
        placeholder="Contact No."
        required
        className="input"
      />
      <input
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
        required
        className="input"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-lg text-white bg-[var(--accent)]"
      >
        {loading ? "Creating..." : "Create Company Account"}
      </button>

      {message && (
        <p className="text-sm text-center text-gray-500 mt-2">{message}</p>
      )}
    </form>
  );
}
