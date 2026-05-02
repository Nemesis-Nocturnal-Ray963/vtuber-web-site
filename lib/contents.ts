import { CalendarDays, Gamepad2, Handshake, Mic2, Radio, Video } from "lucide-react";

export type ContentItem = {
  title: string;
  label: string;
  description: string;
  icon: typeof Radio;
};

export const contentItems: ContentItem[] = [
  {
    title: "Live Streaming",
    label: "配信",
    description: "雑談、ゲーム、記念配信など、透明感のある世界観で届けるライブコンテンツ。",
    icon: Radio,
  },
  {
    title: "Short Movie",
    label: "動画",
    description: "切り抜き、ショート企画、告知映像などSNS展開に適したコンテンツ。",
    icon: Video,
  },
  {
    title: "Music",
    label: "歌",
    description: "カバー、オリジナル楽曲、歌枠を軸にした音楽活動。",
    icon: Mic2,
  },
  {
    title: "Game",
    label: "ゲーム",
    description: "実況、参加型、イベント企画などコミュニティと育つゲーム配信。",
    icon: Gamepad2,
  },
  {
    title: "Collaboration",
    label: "コラボ",
    description: "VTuber、クリエイター、企業との上品で記憶に残る共同企画。",
    icon: Handshake,
  },
  {
    title: "Special Event",
    label: "企画",
    description: "周年、季節イベント、グッズ連動などブランド体験を広げる特別企画。",
    icon: CalendarDays,
  },
];
