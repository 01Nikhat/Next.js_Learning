import type { Metadata } from "next";

import "./globals.css";
import { Navbar } from "./components/Navbar";


export const metadata: Metadata = {
  title: "Contact Manager",
  description: "A contact manager Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
        {children}
        </main></body>
    </html>
  );
}
