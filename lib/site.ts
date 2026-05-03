import type { Metadata } from "next";

export const siteConfig = {
  name: "白玉 天 Official Site",
  characterName: "白玉 天",
  description: "白銀の召喚士VTuber『白玉 天』の公式サイト",
  url: "https://example.com",
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
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const pageDescription = description ?? siteConfig.description;
  const url = new URL(path, siteConfig.url).toString();

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [
        {
          url: siteConfig.images.ogp,
          width: 768,
          height: 512,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [siteConfig.images.ogp],
    },
  };
}
