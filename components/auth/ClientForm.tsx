// ClientForm.tsx
"use client";

export function ClientForm() {
  return (
    <form className="space-y-6">
      {" "}
      {/* Increased space-y */}
      {/* New: First Name and Last Name fields, side-by-side */}
      <div className="relative">
        <input
          type="email"
          placeholder="Client Email"
          className="w-full px-5 py-4 border border-[var(--border)] rounded-lg bg-[var(--bg)] text-[var(--fg)] placeholder-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          required // Increased padding and text size
        />
      </div>
      <div className="relative">
        <input
          type="password"
          placeholder="Password"
          className="w-full px-5 py-4 border border-[var(--border)] rounded-lg bg-[var(--bg)] text-[var(--fg)] placeholder-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          required // Increased padding and text size
        />
      </div>
      <button
        type="submit"
        className="w-full py-4 rounded-xl text-white bg-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-hover)] font-medium transition-colors duration-200 shadow-md hover:shadow-lg text-lg" // Increased padding and text size
      >
        Login as Client
      </button>
    </form>
  );
}
