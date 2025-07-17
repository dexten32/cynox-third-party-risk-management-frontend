// CompanySignupForm.tsx
"use client";

export function CompanySignupForm() {
  return (
    <form className="space-y-6">
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
          placeholder="Email"
          className="w-full px-5 py-4 border border-[var(--border)] rounded-lg bg-[var(--bg)] text-[var(--fg)] placeholder-gray-500 text-base focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
          required
        />
      </div>

      {/* New: Contact No. field */}
      <div className="relative">
        <input
          type="tel"
          placeholder="Contact No."
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

      <div>
        <button
          type="submit"
          className="w-full py-4 rounded-lg text-white bg-[var(--accent)] hover:text-[var(--accent)] hover:bg-[var(--accent-hover)] font-medium transition-colors duration-200 shadow-md hover:shadow-lg text-lg"
        >
          Create account
        </button>
      </div>

      <p className="text-sm text-center text-gray-500 mt-2">
        You will be granted access after verification.
      </p>
    </form>
  );
}
