"use client";

import { useState } from "react";
import { useAuth } from "@/components/hooks/AuthService"; // Assuming useAuth provides a 'signup' function

export function ClientSignupForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    organizationName: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Fix: Call useAuth hook at the top level of the component, not inside handleSubmit
  const signup = useAuth().signup;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Attempt to sign up the user with the form data and a 'CLIENT' role
      await signup(
        {
          name: `${form.firstName} ${form.lastName}`,
          email: form.email,
          contactNumber: form.contactNumber,
          organizationName: form.organizationName,
          password: form.password,
        },
        "CLIENT"
      );
      setMessage("Signup successful! Awaiting approval.");
      // Clear the form after successful submission
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        contactNumber: "",
        organizationName: "",
        password: "",
      });
    } catch (err: unknown) {
      // Fix: Corrected catch block syntax and added type for 'err'
      // Log the error for debugging purposes
      console.error("Signup error:", err);
      setMessage("Something went wrong. Try again.");
    } finally {
      // Ensure loading state is reset regardless of success or failure
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
          className="input p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
          className="input p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <input
        name="email"
        type="email" // Added type="email" for better validation
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className="input w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        name="contactNumber"
        type="tel" // Added type="tel" for contact number
        value={form.contactNumber}
        onChange={handleChange}
        placeholder="Contact Number"
        required
        className="input w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        name="organizationName"
        value={form.organizationName}
        onChange={handleChange}
        placeholder="Organization Name"
        required
        className="input w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
        required
        className="input w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        {loading ? "Creating..." : "Create Client Account"}
      </button>

      {message && (
        <p className="text-sm text-center text-gray-500 mt-2">{message}</p>
      )}
    </form>
  );
}
