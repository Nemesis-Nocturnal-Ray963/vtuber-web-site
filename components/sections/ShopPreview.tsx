import { ShoppingBag } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GlowButton } from "@/components/ui/GlowButton";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { productItems } from "@/lib/products";

export function ShopPreview() {
  return (
    <section className="py-24">
      <div className="container-lux grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <SectionTitle
            eyebrow="Shop"
            title="グッズ展開予定"
            description="公式グッズ、デジタルコンテンツ、記念アイテムを追加しやすい商品データ構造で設計しています。"
          />
          <div className="mt-8">
            <GlowButton href="/shop" variant="secondary">
              <ShoppingBag className="size-4" />
              SHOPへ
            </GlowButton>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {productItems.slice(0, 4).map((product) => (
            <GlassCard key={product.name}>
              <p className="text-xs font-semibold tracking-[0.24em] text-royalGold">
                {product.status}
              </p>
              <h3 className="mt-4 font-serif text-2xl text-mainWhite">{product.name}</h3>
              <p className="mt-3 text-sm text-moonSilver/60">{product.category}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
