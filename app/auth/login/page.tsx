"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CompanyForm } from "@/components/auth/CompanyForm";
import { ClientForm } from "@/components/auth/ClientForm";
import { VendorForm } from "@/components/auth/VendorForm";
import { CompanySignupForm } from "@/components/auth/CompanySignupForm";
import { ClientSignupForm } from "@/components/auth/ClientSignupForm";
import { VendorSignupForm } from "@/components/auth/VendorSignupForm";
import { FormFooter } from "@/components/auth/FormFooter";
import { PendingUserPanel } from "@/components/company/pendingUserPanel";
import Image from "next/image";

export default function LoginPage() {
  const [role, setRole] = useState<"company" | "client" | "vendor">("company");
  const [mode, setMode] = useState<"login" | "signup">("login");
  const router = useRouter();

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    if (storedRole) {
      switch (storedRole.toUpperCase()) {
        case "COMPANY":
          router.push("/company/dashboard");
          break;
        case "CLIENT":
          router.push("/client/dashboard");
          break;
        case "VENDOR":
          router.push("/vendor/dashboard");
          break;
        default:
          break; // Unknown role
      }
    }
  }, []);

  return (
    <>
      <svg width="0" height="0" className="absolute z-30">
        <defs>
          <clipPath id="wavy-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.3 1 C 0.0 0.8, 0.5 0.6, 0.2 0.43 C -0.08 0.25, 0.15 0.07, 0.16 0 L 1 0 L 1 1 Z" />
          </clipPath>
        </defs>
      </svg>

      <main className="min-h-screen grid grid-cols-1 md:grid-cols-2 relative z-10 bg-transparent">
        <div className="relative z-20 flex flex-col px-8 py-10 justify-start">
          <div className="flex items-center justify-between mb-12 z-12">
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
            <div className="flex gap-6 text-sm font-medium p-2 rounded-lg">
              {(["company", "client", "vendor"] as const).map((r) => (
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
            <h3 className="text-md font-medium text-[var(--accent)] uppercase mb-2">
              {mode === "login" ? "Good to see you again" : "Start for free."}
            </h3>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              {mode === "login" ? "Welcome Back." : "Create new account."}
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

            <FormFooter
              mode={mode}
              onToggle={() => setMode(mode === "login" ? "signup" : "login")}
            />
          </div>
        </div>

        <div
          className="hidden md:block relative z-20"
          style={{
            clipPath: "url(#wavy-clip)",
            WebkitClipPath: "url(#wavy-clip)",
          }}
        >
          <Image
            src="/1377548.png"
            alt="Scenic Mountains"
            fill
            className="object-cover"
          />
        </div>
      </main>
    </>
  );
}
