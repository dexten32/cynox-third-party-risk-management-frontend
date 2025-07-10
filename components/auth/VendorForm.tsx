// VendorForm.tsx
"use client";

export function VendorForm() {
  return (
    <form className="space-y-6">
      {/* New: First Name and Last Name fields, side-by-side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="First Name"
            className="w-full px-5 py-4 border border-[var(--border)] rounded-lg bg-[var(--bg)] text-[var(--fg)] placeholder-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            required
          />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Last Name"
            className="w-full px-5 py-4 border border-[var(--border)] rounded-lg bg-[var(--bg)] text-[var(--fg)] placeholder-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            required
          />
        </div>
      </div>

      <div className="relative">
        <input
          type="email"
          placeholder="Vendor Email"
          className="w-full px-5 py-4 border border-[var(--border)] rounded-lg bg-[var(--bg)] text-[var(--fg)] placeholder-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          required
        />
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Client Name"
          className="w-full px-5 py-4 border border-[var(--border)] rounded-lg bg-[var(--bg)] text-[var(--fg)] placeholder-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          required
        />
      </div>
      <div className="relative">
        <input
          type="password"
          placeholder="Password"
          className="w-full px-5 py-4 border border-[var(--border)] rounded-lg bg-[var(--bg)] text-[var(--fg)] placeholder-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full py-4 rounded-lg text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] font-medium transition-colors duration-200 shadow-md hover:shadow-lg text-lg"
      >
        Login as Vendor
      </button>
    </form>
  );
}
