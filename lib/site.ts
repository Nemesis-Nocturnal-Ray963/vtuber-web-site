import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const siteConfig = {
  siteName: "白玉 天 Official Site",
  name: "白玉 天 Official Site",
  characterName: "白玉 天",
  reading: "しらたま てん",
  englishName: "Shiratama Ten",
  description:
    "白玉 天（しらたま てん）の公式サイトです。活動情報、コンテンツ、グッズ、問い合わせ窓口を順次公開します。",
  url: siteUrl,
  images: {
    favicon: "/images/favicon-32.png",
    logo: "/images/site-logo.png",
    ogp: "/images/ogp.png",
  },
  nav: [
    { name: "HOME", href: "/" },
    { name: "PROFILE", href: "/profile" },
    { name: "CONTENTS", href: "/contents" },
    { name: "SHOP", href: "/shop" },
    { name: "NEWS", href: "/news" },
    { name: "CONTACT", href: "/contact" },
  ],
  socialLinks: [
    { label: "YouTube", href: "https://www.youtube.com/" },
    { label: "X", href: "https://x.com/" },
  ],
};

export const navItems = siteConfig.nav.map((item) => ({
  label: item.name,
  href: item.href,
}));

type MetadataInput = {
  title?: string;
  description?: string;
  path?: string;
};

export function createMetadata({ title, description, path = "/" }: MetadataInput = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.siteName}` : siteConfig.siteName;
  const pageDescription = description ?? siteConfig.description;
  const url = new URL(path, siteConfig.url).toString();
  const ogpUrl = new URL(siteConfig.images.ogp, siteConfig.url).toString();

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.siteName,
      type: "website",
      images: [
        {
          url: ogpUrl,
          width: 1200,
          height: 630,
          alt: siteConfig.siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [ogpUrl],
    },
  };
}
