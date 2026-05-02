import { CalendarHeart, Clapperboard, Gamepad2, Handshake, Music2, Radio } from "lucide-react";

export const contentsList = [
  { title: "Live Streaming", description: "配信活動" },
  { title: "Short Movie", description: "ショート動画" },
  { title: "Music", description: "音楽活動" },
  { title: "Game", description: "ゲーム配信" },
  { title: "Collaboration", description: "コラボ" },
  { title: "Special Event", description: "イベント" },
];

const icons = [Radio, Clapperboard, Music2, Gamepad2, Handshake, CalendarHeart];

export const contentItems = contentsList.map((item, index) => ({
  ...item,
  label: item.title.toUpperCase(),
  icon: icons[index],
}));
