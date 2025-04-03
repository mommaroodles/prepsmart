import Link from "next/link";
import clsx from "clsx";
import { FaCubesStacked } from "react-icons/fa6";

interface LogoProps {
  link?: boolean;
  className?: string;
};

export const Logo = ({ link = false, className }: LogoProps) => {
  const content = (
    <div className={clsx("flex items-center gap-2", className)}>
      <FaCubesStacked size={45} className="Logo" />
      <span className="text-light-100 text-2xl sm:text-[38px] font-bold">
        Prep<span className="TextGradient">Smart</span>
      </span>
    </div>
  );

  return link ? <Link href="/">{content}</Link> : content;
};

export default Logo;
