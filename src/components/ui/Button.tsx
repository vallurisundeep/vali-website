import Link from "next/link";
import { clsx } from "clsx";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant = "primary" | "ghost" | "outline";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-deep shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30",
  ghost: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm",
  outline:
    "border border-ink/15 text-ink hover:border-primary hover:text-primary bg-transparent",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  const classes = clsx(baseClasses, variantClasses[variant], className);

  if ("href" in props && props.href) {
    const { href, ...rest } = props as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonAsButton)}>
      {children}
    </button>
  );
}
