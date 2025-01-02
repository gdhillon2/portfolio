import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Gurvir Dhillon Portfolio",
  description: "Gurvir Dhillon's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="flex w-full h-full justify-center items-center">
      <body
        className={`flex justify-center items-center ${geistSans.variable} ${geistMono.variable} antialiased bg-black p-5 h-full w-full`}
      >
        {children}
      </body>
    </html>
  );
}
