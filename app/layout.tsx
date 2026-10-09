import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const metadataBase = new URL(siteUrl ?? "http://localhost:3000");
const description =
  "Laxman Lokare is a MERN stack developer and BCA student in Karad, Maharashtra, building responsive, user-friendly web applications with React, Node.js, Express, and MongoDB.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: "Laxman Lokare | MERN Stack Developer & Web Developer",
    template: "%s | Laxman Lokare",
  },
  description,
  applicationName: "Laxman Lokare Portfolio",
  keywords: [
    "Laxman Lokare",
    "MERN stack developer",
    "full stack developer",
    "React developer",
    "Node.js developer",
    "web developer in Karad",
    "web developer in Maharashtra",
    "BCA student",
  ],
  authors: [{ name: "Laxman Lokare" }],
  creator: "Laxman Lokare",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Laxman Lokare | MERN Stack Developer & Web Developer",
    description,
    siteName: "Laxman Lokare Portfolio",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Laxman Lokare — MERN Stack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laxman Lokare | MERN Stack Developer & Web Developer",
    description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  ...(siteUrl ? { alternates: { canonical: "/" } } : {}),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Laxman Lokare",
    jobTitle: "MERN Stack Developer",
    description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karad",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    knowsAbout: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JavaScript",
      "Web development",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
