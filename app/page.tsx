import { Concept } from "@/components/sections/Concept";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { ContentsPreview } from "@/components/sections/ContentsPreview";
import { Hero } from "@/components/sections/Hero";
import { NewsPreview } from "@/components/sections/NewsPreview";
import { ShopPreview } from "@/components/sections/ShopPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Concept />
      <ContentsPreview />
      <ShopPreview />
      <NewsPreview />
      <ContactCTA />
    </>
  );
}
