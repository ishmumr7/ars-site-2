import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const kanit = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ARS",
  description: "Revolutionizing Automation, Driving Innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={kanit.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
