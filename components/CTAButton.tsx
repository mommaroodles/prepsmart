"use client"

import { useRouter } from "next/navigation";


interface CTAButton {
    buttonText: string;
    buttonLink: string;
}

const CTAButton = ({
    buttonText,
    buttonLink,
}: CTAButton) => {
    const router = useRouter();
    return (
        <button
            className="mt-10 px-8 py-6 text-lg font-bold leading-6 text-white focus-visible:ring-ring inline-flex justify-center whitespace-nowrap transition-colors focus-visible:ring-1 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 HeroButton group/button relative h-11 w-full rounded-xl cursor-pointer  bg-transparent md:w-auto dark:text-gray-100 dark:hover:text-white items-center space-x-2.5"
            onClick={() => router.push(buttonLink)}>
            {buttonText}
        </button>
    );
};

export default CTAButton;
