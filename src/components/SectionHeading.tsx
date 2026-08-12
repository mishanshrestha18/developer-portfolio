type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "text-center" : undefined}>
      <span className="font-display mb-3 block text-xs font-medium tracking-widest text-accent uppercase">
        {eyebrow}
      </span>
      <h2 className="font-display text-xl tracking-tight text-balance text-white sm:text-2xl md:text-3xl">
        {title}
      </h2>
    </div>
  );
}
