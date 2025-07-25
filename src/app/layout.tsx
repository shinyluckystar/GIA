import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CoverImage from '@/assets/cover.jpg';
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
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
          className="min-h-screen flex flex-col items-center bg-cover bg-center"
          style={{
            backgroundImage: `url(${CoverImage.src})`,
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
