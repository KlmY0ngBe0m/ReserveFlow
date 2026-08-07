import "./globals.css";
import Header from "./components/Header";
import React, { Children } from "react";
import { Html } from "next/document";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
    <body>
      <Header />
      {children}
    </body>
    </html>
  );
} 
