import type { Metadata } from "next";
import "./globals.css";
import PageRestoreHandler from "@/components/PageRestoreHandler";

const BASE_URL = "https://steuerpartner-ffm.de";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Weber & Partner | Steuerberatung Frankfurt",
    template: "%s | Weber & Partner Steuerberatung",
  },
  description:
    "Moderne Steuerberatung für Privatpersonen, Selbstständige und Unternehmen in Frankfurt am Main. Persönlich, kompetent, digital.",
  keywords: [
    "Steuerberater Frankfurt",
    "Steuererklärung Frankfurt",
    "Buchhaltung Frankfurt",
    "Jahresabschluss",
    "Lohnbuchhaltung",
    "Steuerberatung",
    "Weber Partner",
  ],
  authors: [{ name: "Weber & Partner GmbH" }],
  creator: "WEBSYLON",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: BASE_URL,
    siteName: "Weber & Partner Steuerberatung",
    title: "Weber & Partner | Steuerberatung Frankfurt",
    description:
      "Moderne Steuerberatung mit persönlichem Anspruch. Für Privatpersonen, Selbstständige und Unternehmen in Frankfurt am Main.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Weber & Partner Steuerberatung Frankfurt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weber & Partner | Steuerberatung Frankfurt",
    description:
      "Moderne Steuerberatung mit persönlichem Anspruch. Für Privatpersonen, Selbstständige und Unternehmen in Frankfurt am Main.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-icon5.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/icon5.png" />
        <link rel="apple-touch-icon" href="/apple-icon5.png" />
      </head>
      <body>
        <PageRestoreHandler />
        {children}
      </body>
    </html>
  );
}
