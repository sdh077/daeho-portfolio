import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { JetBrains_Mono } from 'next/font/google'
import Provider from "./provider";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${jetbrainsMono.variable}`}
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
