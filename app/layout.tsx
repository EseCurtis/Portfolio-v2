import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

const monaSans = localFont({
  src: "../public/fonts/dribble-mona-sans.woff2",
  variable: "--font-mona-sans",
  display: "swap"
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#000000" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" }
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://esecurtis.com"
  ),
  title: {
    default: "Ese Curtis • Software Engineer & Fullstack Developer",
    template: "%s | Ese Curtis"
  },
  description:
    "Software Engineer and Fullstack Developer specializing in React, Next.js, and modern web technologies. Building exceptional user experiences with passion. View my portfolio, projects, and experience.",
  keywords: [
    "Ese Curtis",
    "Software Engineer",
    "Fullstack Developer",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer",
    "Portfolio",
    "UI/UX Developer",
    "JavaScript Developer",
    "React.js",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "Framer Motion"
  ],
  authors: [{ name: "Ese Curtis", url: "https://eseszn.medium.com" }],
  creator: "Ese Curtis",
  publisher: "Ese Curtis",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Ese Curtis Portfolio",
    title: "Ese Curtis • Software Engineer & Fullstack Developer",
    description:
      "Software Engineer and Fullstack Developer specializing in React, Next.js, and modern web technologies. Building exceptional user experiences with passion.",
    images: [
      {
        url: "/media/ese-profile-2.png",
        width: 1200,
        height: 630,
        alt: "Ese Curtis - Software Engineer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ese Curtis • Software Engineer & Fullstack Developer",
    description:
      "Software Engineer and Fullstack Developer specializing in React, Next.js, and modern web technologies.",
    creator: "@CurtisEse",
    images: ["/media/ese-profile-2.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code"
  },
  alternates: {
    canonical: "/"
  },
  category: "Portfolio"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured data for SEO
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ese Curtis",
    jobTitle: "Software Engineer & Fullstack Developer",
    description:
      "Software Engineer and Fullstack Developer specializing in React, Next.js, and modern web technologies.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://esecurtis.com",
    image: `${
      process.env.NEXT_PUBLIC_SITE_URL || "https://esecurtis.com"
    }/media/ese-profile-2.png`,
    sameAs: [
      "https://www.instagram.com/ese.szn/",
      "https://x.com/CurtisEse",
      "https://eseszn.medium.com"
    ],
    email: "curtisese52@gmail.com",
    knowsAbout: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Frontend Development",
      "Fullstack Development",
      "Web Development",
      "UI/UX Design"
    ],
    alumniOf: {
      "@type": "Organization",
      name: "Software Engineering"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Ese Curtis Portfolio",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://esecurtis.com",
    description:
      "Portfolio website of Ese Curtis, Software Engineer and Fullstack Developer",
    author: {
      "@type": "Person",
      name: "Ese Curtis"
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${
          process.env.NEXT_PUBLIC_SITE_URL || "https://esecurtis.com"
        }/?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${monaSans.variable} antialiased bg-background  `}
        id="main-body"
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
