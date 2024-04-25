import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import MyProfile from "./components/MyProfile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lakshay's Blog",
  description: "Created by Lakshay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        <MyProfile></MyProfile>
        {children}
      </body>
    </html>
  );
}
