import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Headerpage from "./Header/page";
import Footerpage from "./Footer/page";
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
  title: "My App",
  description: "My website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">

        {/* Header */}
        <header className="bg-black text-white p-4">
          <Headerpage />
        </header>

        {/* IMPORTANT */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-200 p-4 text-center">
          <Footerpage />
        </footer>

      </body>
    </html>
  );
}