import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Naskh_Arabic } from "next/font/google";
import "@/styles/globals.css";
import { Providers } from "@/app/Providers";

import AppNavbar from "@/components/app-navbar";

export const notoNaskhArabic = Noto_Naskh_Arabic({
  variable: "--font-noto-naskh-arabic",
  subsets: ["arabic"],
});

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
        className={`${geistSans.variable} ${geistMono.variable} ${notoNaskhArabic} antialiased`}
      >
        <Providers>
          <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
            <AppNavbar />

            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
