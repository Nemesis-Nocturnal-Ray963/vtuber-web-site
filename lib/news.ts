export type NewsItem = {
  title: string;
  date: string;
  category: "INFO" | "LIVE" | "SHOP" | "MEDIA";
  excerpt: string;
};

export const newsItems: NewsItem[] = [
  {
    title: "Official website opened",
    date: "2026.05.02",
    category: "INFO",
    excerpt: "白玉 天 Official Siteを公開しました。最新情報はこちらでお知らせします。",
  },
  {
    title: "First goods collection is in preparation",
    date: "2026.05.10",
    category: "SHOP",
    excerpt: "アクリルスタンド、ボイスパックなどの公式グッズを準備中です。",
  },
  {
    title: "Collaboration inquiries are now open",
    date: "2026.05.16",
    category: "MEDIA",
    excerpt: "企業案件、番組出演、コラボレーションのご相談を受け付けています。",
  },
];
