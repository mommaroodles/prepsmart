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
  description,
  buttonText,
  buttonLink,
}: HeroSectionProps) => {
  const router = useRouter();
  return (
    <section aria-labelledby="hero-title" className="py-2">
      <div className="container mx-auto px-4 flex flex-col items-center gap-6 max-w-[1200px]">
        <h1 className="TextGradient text-center sm:text-left">{title}</h1>
        <h2 className="text-center sm:text-left">{subtitle}</h2>
        <p className="text-3xl text-center sm:text-left">{description}</p>
        <button
          className="mt-10 px-8 py-6 text-lg font-bold leading-6 text-white focus-visible:ring-ring inline-flex justify-center whitespace-nowrap transition-colors focus-visible:ring-1 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground HeroButton group/button relative h-11 w-full rounded-xl cursor-pointer  bg-transparent md:w-auto dark:text-gray-100 dark:hover:text-white items-center space-x-2.5"
          onClick={() => router.push(buttonLink)}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
