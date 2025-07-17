module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // App router files
    "./components/**/*.{js,ts,jsx,tsx}", // Your components (like CompanyForm etc.)
    "./pages/**/*.{js,ts,jsx,tsx}", // If you're mixing app/pages dirs
  ],
  theme: {
    extend: {
      colors: {
        foreground: "var(--fg)",
        background: "var(--bg)",
        accent: "var(--accent)",
      },
      fontFamily: {
        geist: ["var(--font-geist-sans)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
