import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sultan Aldossari | Front-End Developer Portfolio",
  description:
    "Sultan Aldossari — Front-End Developer and Computer Science student based in AlKharj, Riyadh. Specializing in React, Next.js, and modern web technologies.",
  keywords: [
    "Sultan Aldossari",
    "Front-End Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Web Developer",
    "Riyadh",
    "AlKharj",
    "Computer Science",
    "Tailwind CSS",
  ],
  authors: [{ name: "Sultan Aldossari" }],
  openGraph: {
    title: "Sultan Aldossari | Front-End Developer Portfolio",
    description:
      "Front-End Developer and Computer Science student — React, Next.js, Tailwind CSS, and more.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}