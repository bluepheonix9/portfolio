import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";
import { person } from "@/content/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${person.name} — ${person.role}`,
  description: person.intro,
  openGraph: {
    title: `${person.name} — ${person.role}`,
    description: person.intro,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
