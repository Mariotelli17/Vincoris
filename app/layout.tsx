import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vincoris | Landing",
  description: "Estructura inicial de homepage con Next.js + TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
