"use client";

import "../styles/globals.css";
import { Inter } from "next/font/google";
import Squares from "@/components/background/squares";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Default theme setup (runs on client only)

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <div className="fixed inset-0 -z-10">
          <Squares
            borderColor="#e6e6e6ff" // or 'transparent' if you prefer
            hoverFillColor="#f8f8f8ff"
            squareSize={40}
            speed={0.1}
            direction="diagonal"
          />
        </div>
        {children}
      </body>
    </html>
  );
}
