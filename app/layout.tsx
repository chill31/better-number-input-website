import SideBar from "@/components/page/sideBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "better-number-input Documentation",
  description: "Documentation for the better-number-input package",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SideBar />
        {children}
      </body>
    </html>
  );
}
