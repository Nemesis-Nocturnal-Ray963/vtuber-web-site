type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-xs font-semibold uppercase tracking-[0.36em] text-royalGold drop-shadow-[0_0_18px_rgba(201,168,106,0.24)]">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-mainWhite sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-moonSilver/82 sm:text-lg">{description}</p>
      ) : null}
      <div
        className={`hairline mt-7 h-px ${align === "center" ? "mx-auto w-48" : "w-48"}`}
        aria-hidden="true"
      />
    </div>
  );
}
