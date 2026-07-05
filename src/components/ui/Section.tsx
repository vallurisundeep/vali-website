import { clsx } from "clsx";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
};

export function Section({ children, className, containerClassName, id }: SectionProps) {
  return (
    <section id={id} className={clsx("py-20 sm:py-28", className)}>
      <div className={clsx("mx-auto w-full max-w-6xl px-6", containerClassName)}>{children}</div>
    </section>
  );
}
