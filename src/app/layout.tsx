import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mishan Kumar Shrestha — Full Stack Developer",
  description:
    "Full Stack Developer with an MSc in Computer Science. Building production-ready applications end-to-end with Next.js, Laravel, React and Supabase.",
  openGraph: {
    title: "Mishan Kumar Shrestha — Full Stack Developer",
    description:
      "Full Stack Developer building production-ready applications end-to-end with Next.js, Laravel, React and Supabase.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${spaceGrotesk.variable} bg-ink font-sans text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
