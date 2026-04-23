import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Headerpage from "./Header/page";
import Footerpage from "./Footer/page";
import "./globals.css";
import PointerChaser from "./pointer/page";
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
      <body className="min-h-screen flex flex-col bg-[#0f172a] ">
   <PointerChaser />
        {/* Header */}
        <header className="bg-[#0f172a] text-white p-4">
          <Headerpage />
        </header>

        {/* IMPORTANT */}
        <main className="flex-1">
        
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-[#0f172a] p-4 text-center">
          <Footerpage />
        </footer>

      </body>
    </html>
  );
}