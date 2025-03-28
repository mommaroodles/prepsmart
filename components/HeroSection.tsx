"use client"

import { useRouter } from "next/navigation";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const HeroSection = ({
  title,
  subtitle,
  description2,
  buttonText,
  buttonLink,
}: HeroSectionProps) => {
  const router = useRouter();
  return (
    <section aria-labelledby="hero-title" className="py-2 border-b-2 border-blue-500">
      <div className="container mx-auto px-4 flex flex-col items-center gap-6 max-w-[1200px]">
        <h1 className="TextGradient">{title}</h1>
              <h2>{subtitle}</h2>
              <p className="text-3xl">{description2}</p>
              <button className="btn-primary"
                onClick={() => router.push(buttonLink)}>
              {buttonText}
              </button>
      </div>
    </section>
  );
};

export default HeroSection;
