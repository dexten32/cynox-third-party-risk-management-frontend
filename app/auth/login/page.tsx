// LoginPage.tsx
"use client";

import { useState } from "react";
import { CompanyForm } from "@/components/auth/CompanyForm";
import { ClientForm } from "@/components/auth/ClientForm";
import { VendorForm } from "@/components/auth/VendorForm";
import { CompanySignupForm } from "@/components/auth/CompanySignupForm";
import { ClientSignupForm } from "@/components/auth/ClientSignupForm";
import { VendorSignupForm } from "@/components/auth/VendorSignupForm";
// import { FormContainer } from "@/components/auth/FormContainer"; // REMOVE THIS IMPORT
import { FormFooter } from "@/components/auth/FormFooter";
import Image from "next/image";

export default function LoginPage() {
  const [role, setRole] = useState<"company" | "client" | "vendor">("company");
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <>
      {/* SVG clipPath definition - Keep this for the wavy image effect */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="wavy-clip" clipPathUnits="objectBoundingBox">
            <path
              d="M 0 1
        C 0.25 0.9, 0.35 0.7, 0.3 0.5
        C 0.25 0.3, 0.2 0.1, 0.4 0
        L 0 0
        Z"
            />
          </clipPath>
        </defs>
      </svg>

      <main className="min-h-screen grid grid-cols-1 md:grid-cols-2">
        {/* Left: Form & nav */}
        <div className="relative z-10 flex flex-col px-8 py-10 justify-start bg-white">
          {" "}
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.svg"
                alt="Cynox Security Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="font-bold text-lg text-[--fg]">
                CYNOX SECURITY LLP
              </span>
            </div>
            <div className="flex gap-6 text-sm font-medium">
              {(
                ["company", "client", "vendor"] as Array<
                  "company" | "client" | "vendor"
                >
              ).map((r) => (
                <button
                  key={r}
                  onClick={() => setRole(r)}
                  className={`transition hover:text-[var(--fg)] ${
                    role === r
                      ? "text-[var(--fg)] border-b-2 border-[var(--accent)]"
                      : "text-gray-500"
                  }`}
                >
                  {r.charAt(0).toUpperCase() + r.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="max-w-2xl w-full mx-auto px-6 py-8 flex flex-col justify-center flex-grow">
            <h3 className="text-md font-medium text-gray-500 uppercase mb-2">
              {mode === "login" ? "Good to see you again" : "Start for free."}
            </h3>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              {mode === "login" ? "Welcome Back." : "Create new account."}{" "}
            </h2>
            {mode === "login" ? (
              role === "company" ? (
                <CompanyForm />
              ) : role === "client" ? (
                <ClientForm />
              ) : (
                <VendorForm />
              )
            ) : role === "company" ? (
              <CompanySignupForm />
            ) : role === "client" ? (
              <ClientSignupForm />
            ) : (
              <VendorSignupForm />
            )}
            {/* Form Footer */}
            <FormFooter
              mode={mode}
              onToggle={() => setMode(mode === "login" ? "signup" : "login")}
            />
          </div>
        </div>

        {/* Right: Scenic image panel */}
        <div className="hidden md:block relative">
          <Image
            src="/1377548.png"
            alt="Scenic Mountains"
            fill
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-white z-10"
            style={{
              clipPath: "url(#wavy-clip)",
              opacity: 1,
            }}
          />
        </div>
      </main>
    </>
  );
}
