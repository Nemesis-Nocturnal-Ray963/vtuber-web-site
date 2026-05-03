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
            title="Shop Coming Soon"
            description="公式グッズ・デジタルコンテンツを準備中です。販売開始前のため、現在ご購入いただける商品はありません。"
          />
          <div className="mt-8">
            <GlowButton href="/shop" variant="secondary">
              <ShoppingBag className="size-4" />
              SHOP準備状況を見る
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
