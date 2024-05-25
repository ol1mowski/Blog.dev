import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/UI/Header/Header.component.page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog.dev | Blog dla Web developerów",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl-PL">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
