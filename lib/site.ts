import type { Metadata } from "next";

export const siteConfig = {
  name: "白玉 天 Official Site",
  characterName: "白玉 天",
  reading: "しらたま てん",
  englishName: "Shiratama Ten",
  title: "白銀の召喚士VTuber",
  description:
    "白銀の召喚士VTuber・白玉 天の公式サイト。配信、動画、音楽、グッズ、企業案件のお問い合わせ情報を掲載しています。",
  url: "https://example.netlify.app",
  image: "/images/ogp.png",
  socialLinks: [
    { label: "YouTube", href: "https://www.youtube.com/" },
    { label: "X", href: "https://x.com/" },
    { label: "TikTok", href: "https://www.tiktok.com/" },
  ],
};

export const navItems = [
  { label: "HOME", href: "/" },
  { label: "PROFILE", href: "/profile" },
  { label: "CONTENTS", href: "/contents" },
  { label: "SHOP", href: "/shop" },
  { label: "NEWS", href: "/news" },
  { label: "CONTACT", href: "/contact" },
];

type MetadataInput = {
  title?: string;
  description?: string;
  path?: string;
};

export function createMetadata({
  title,
  description = siteConfig.description,
  path = "/",
}: MetadataInput = {}): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const url = new URL(path, siteConfig.url);

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.image, width: 1200, height: 630 }],
      locale: "ja_JP",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [siteConfig.image],
    },
  };
}
