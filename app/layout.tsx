import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PostHog Clone - Product Analytics Platform",
  description: "Open-source product analytics, feature flags, and session recording",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
