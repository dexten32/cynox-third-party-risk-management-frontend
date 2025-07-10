/* eslint-disable @typescript-eslint/no-unused-vars */
// FormContainer.tsx
"use client";

import { ReactNode } from "react";

interface FormContainerProps {
  selectedRole: "company" | "client" | "vendor";
  setSelectedRole: (role: "company" | "client" | "vendor") => void; // Keep for internal state management, even if not rendered
  mode: "login" | "signup";
  children: ReactNode;
}

// const roles = ["company", "client", "vendor"] as const; // No longer needed for rendering here

export function FormContainer({
  selectedRole, // Still passed as prop for context
  setSelectedRole, // Still passed as prop for context
  mode, // Still passed as prop for context
  children,
}: FormContainerProps) {
  // getRoleHeading and the internal role toggle div are removed
  // as the LoginPage now handles the main heading and role selection.

  return (
    // This div's styling is no longer visible as FormContainer is removed from LoginPage render
    // It's effectively just returning its children now.
    // If you remove FormContainer entirely, you'd pass children directly in LoginPage
    // For now, to keep the file structure, we'll just simplify its render.
    <div>{children}</div>
  );
}
