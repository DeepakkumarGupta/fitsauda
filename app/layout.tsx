import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "fitsauda.com",
  description: "fitsauda is a health ecommerce platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="mYlCXr1cKuVSaciyBVtv579UF_5bWZwhfxCR7HDEZhM"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
