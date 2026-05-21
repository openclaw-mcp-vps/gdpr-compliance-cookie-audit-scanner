import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GDPR Cookie Audit Scanner – Scan for Cookie Compliance Violations",
  description: "Crawl your website to detect non-compliant cookies, missing consent banners, and generate GDPR compliance reports with actionable fix recommendations."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7ef5cc53-6997-42a0-a68f-26fd871b75b9"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
