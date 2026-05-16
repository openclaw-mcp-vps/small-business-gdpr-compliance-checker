import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GDPR Compliance Checker for Small Businesses",
  description: "Scan your website for GDPR violations. Get a detailed compliance report and actionable fix recommendations. Built for small businesses with EU customers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7bd1438c-70ed-4747-8b97-a723971b6137"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
