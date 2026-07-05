import { clsx } from "clsx";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={clsx(
            "mb-3 text-sm font-semibold uppercase tracking-wider",
            dark ? "text-accent-from" : "text-primary",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          "text-3xl font-semibold tracking-tight sm:text-4xl",
          dark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            "mt-4 text-lg leading-relaxed",
            dark ? "text-slate-300" : "text-slate-600",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
