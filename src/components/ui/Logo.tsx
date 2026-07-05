import Image from "next/image";
import { clsx } from "clsx";
import logo from "../../../public/vali_logo.png";

const NATIVE_ASPECT = logo.width / logo.height;

export function Logo({
  dark = false,
  size = 40,
  className,
}: {
  dark?: boolean;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-lg",
        dark && "bg-white/95 px-2 py-1.5 shadow-sm",
        className,
      )}
    >
      <Image
        src={logo}
        alt="Vali LLC"
        height={size}
        width={Math.round(size * NATIVE_ASPECT)}
        className="h-auto w-auto"
        style={{ height: size }}
        priority
      />
    </span>
  );
}
