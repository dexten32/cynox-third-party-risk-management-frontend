// FormFooter.tsx - (No changes from the last version, keeping it here for completeness)
"use client";

interface FormFooterProps {
  mode: "login" | "signup";
  onToggle: () => void;
}

export function FormFooter({ mode, onToggle }: FormFooterProps) {
  return (
    <div className="mt-6 text-center text-sm text-[var(--fg)]">
      {mode === "login" ? (
        <>
          Don’t have an account?{" "}
          <button
            onClick={onToggle}
            className="text-[var(--accent)] hover:text-[var(--accent-hover)] font-medium ml-1"
          >
            Sign up
          </button>
        </>
      ) : (
        <>
          Already a Member?{" "}
          <button
            onClick={onToggle}
            className="text-[var(--accent)] hover:text-[var(--accent-hover)] font-medium ml-1"
          >
            Log In
          </button>
        </>
      )}
    </div>
  );
}
