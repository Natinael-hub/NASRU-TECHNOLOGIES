// components/BrandLogo.tsx
import Image from "next/image";

type BrandLogoProps = {
  /** Tailwind classes for sizing/rounding, etc. */
  className?: string;
  /** Pixel size for width/height (keeps it square). */
  size?: number;
  /** Use true only for above-the-fold logo (e.g., header). */
  priority?: boolean;
};

export default function BrandLogo({
  className = "",
  size = 32,
  priority = false,
}: BrandLogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Nasru Technologies"
      width={size}
      height={size}
      priority={priority}
      className={className}
    />
  );
}

