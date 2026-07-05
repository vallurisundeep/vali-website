import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { COMPANY } from "@/lib/data";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://valits.com"),
  title: {
    default: "Vali LLC | IT Consulting & Staffing — Grow Together",
    template: "%s | Vali LLC",
  },
  description:
    "Vali LLC delivers custom software, cloud, data, UX, and QA services, plus IT staffing and dedicated development teams. Founded 2006, based in Plantation, FL.",
  openGraph: {
    title: "Vali LLC | IT Consulting & Staffing",
    description:
      "Custom software, cloud, data, UX, and QA services — plus IT staffing and dedicated development teams.",
    url: "https://valits.com",
    siteName: "Vali LLC",
    locale: "en_US",
    type: "website",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.name,
  url: "https://valits.com",
  logo: "https://valits.com/vali_logo.png",
  foundingDate: "2006",
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.addressLine1,
    addressLocality: COMPANY.addressCity,
    addressRegion: COMPANY.addressState,
    postalCode: COMPANY.addressZip,
    addressCountry: "US",
  },
  telephone: COMPANY.phone,
  email: COMPANY.email,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface text-ink" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
