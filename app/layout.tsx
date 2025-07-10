"use client";

import "../styles/globals.css";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const LOCAL_KEY = "custom-theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("");

  // Default theme setup (runs on client only)
  useEffect(() => {
    const savedTheme = localStorage.getItem(LOCAL_KEY) || "theme-light-blue";
    setTheme(savedTheme);
    document.body.className = savedTheme;
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${theme}`}>{children}</body>
    </html>
  );
}
