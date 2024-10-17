import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { JetBrains_Mono } from 'next/font/google'
import Provider from "./provider";
import AnalyticsComponent from './analytics'
import { Toaster } from "@/components/ui/toaster";
import dynamic from "next/dynamic";
import { cookies } from "next/headers";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono"
})
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
  title: "Shin Daeho's Portfolio",
  description: "Modern & Minimal",
  keywords: ['프론트엔드 포트폴리오']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = cookies().get('theme')?.value ?? 'light'
  return (
    <html lang="en" data-theme={theme}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${jetbrainsMono.variable}`}
      >
        <Provider>
          {children}
        </Provider>
        <Toaster />
        <AnalyticsComponent />
      </body>
    </html>
  );
}
