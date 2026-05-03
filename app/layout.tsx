import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { createMetadata, siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...createMetadata(),
  icons: {
    icon: [
      { url: siteConfig.images.favicon, sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-64.png", sizes: "64x64", type: "image/png" },
    ],
    shortcut: siteConfig.images.favicon,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>
        <div className="luxury-shell min-h-screen">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
