import type { Metadata } from "next";
import { DM_Serif_Display, Bellota_Text } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"], // Specify font weights if needed
  display: "swap", // Optional, improves performance
  variable: "--font-dm-serif-display", // Optional, for CSS variables
});

const bellotaText = Bellota_Text({
  subsets: ["latin"],
  weight: ["300", "400", "700"], // Specify font weights if needed
  display: "swap", // Optional, improves performance
  variable: "--font-bellota-text", // Optional, for CSS variables
});

export const metadata: Metadata = {
  title: "Second Nature",
  description: "Crafted with Care for Healthier, Happier Pets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
