export type ProductItem = {
  name: string;
  category: string;
  status: "Coming Soon" | "Planning";
  description: string;
};

export const productItems: ProductItem[] = [
  {
    name: "Acrylic Stand",
    category: "Physical Goods",
    status: "Coming Soon",
    description: "白銀と金装飾を活かした飾りやすいアクリルスタンド。",
  },
  {
    name: "Voice Pack",
    category: "Digital",
    status: "Planning",
    description: "召喚士の儀式や日常を感じられる限定ボイスパック。",
  },
  {
    name: "Digital Wallpaper",
    category: "Digital",
    status: "Coming Soon",
    description: "PC、スマートフォン向けの高解像度壁紙コレクション。",
  },
  {
    name: "Limited Goods",
    category: "Seasonal",
    status: "Planning",
    description: "記念日やイベントに合わせた数量限定アイテム。",
  },
];
