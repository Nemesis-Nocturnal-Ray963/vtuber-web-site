import type { Metadata } from "next";
import { ShoppingBag } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { createMetadata } from "@/lib/site";
import { productItems } from "@/lib/products";

export const metadata: Metadata = createMetadata({
  title: "SHOP",
  description: "白玉 天の公式グッズ・デジタルコンテンツ準備状況を掲載しています。",
  path: "/shop",
});

export default function ShopPage() {
  return (
    <section className="py-24">
      <div className="container-lux">
        <SectionTitle
          eyebrow="Shop"
          title="Coming Soon"
          description="公式グッズ・デジタルコンテンツを準備中です。販売開始までしばらくお待ちください。"
          align="center"
        />
        <GlassCard className="mx-auto mt-12 max-w-3xl text-center">
          <ShoppingBag className="mx-auto size-10 text-royalGold" aria-hidden="true" />
          <h2 className="mt-5 font-serif text-3xl text-mainWhite">販売開始前です</h2>
          <p className="mt-4 leading-8 text-moonSilver/76">
            現在ご購入いただける商品はありません。公式グッズ、ボイス、壁紙などのデジタルコンテンツを準備しています。
          </p>
        </GlassCard>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {productItems.map((product) => (
            <GlassCard key={product.name}>
              <p className="text-xs font-semibold tracking-[0.24em] text-royalGold">
                {product.status}
              </p>
              <h2 className="mt-4 font-serif text-2xl text-mainWhite">{product.name}</h2>
              <p className="mt-3 text-sm text-moonSilver/55">{product.category}</p>
              <p className="mt-5 text-sm leading-7 text-moonSilver/72">{product.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
