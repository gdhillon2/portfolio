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
    <html lang="en" className="flex w-full min-h-screen dark">
      <body
        className={`flex flex-col justify-center ${geistSans.variable} ${geistMono.variable} antialiased bg-black h-full w-full`}
      >
        <div className="flex flex-col items-start w-full h-fit p-5 text-shadow text-lg font-bold fixed top-0 left-0">
          <div>Gurvir Dhillon</div>
          <div>Software Engineer</div>
        </div>
        {children}
      </body>
    </html>
  );
}
