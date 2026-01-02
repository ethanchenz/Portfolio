import type { Metadata } from "next";
import { site } from "@/lib/siteData";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: `${site.name} — Portfolio`,
  description: site.tagline,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} — Portfolio`,
    description: site.tagline,
    url: "/",
    siteName: site.domain,
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
