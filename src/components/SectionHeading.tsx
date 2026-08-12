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
      <span className="font-display mb-3 block text-xs font-medium tracking-widest text-violet-400 uppercase">
        {eyebrow}
      </span>
      <h2 className="font-display text-2xl tracking-tight text-white md:text-3xl">
        {title}
      </h2>
    </div>
  );
}
