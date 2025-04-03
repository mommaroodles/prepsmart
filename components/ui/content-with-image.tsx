import Image from "next/image"

interface ContentWithImageProps {
    h4Text: string
    h1Text: string
    description: string
    imageSrc: string
    imageAlt: string
    imageLeft?: boolean
    isLargeImage?: boolean
}

export function ContentWithImage({
    h4Text,
    h1Text,
    description,
    imageSrc,
    imageAlt,
    imageLeft = false,
    isLargeImage = false
}: ContentWithImageProps) {
    return (
        <div className="bg-background py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Column */}
                    <div className={`relative ${isLargeImage ? 'h-[600px]' : 'h-[400px]'} w-full rounded-[15px] overflow-hidden ${imageLeft ? 'lg:order-first' : 'lg:order-last'}`}>
                        <Image
                            src={imageSrc}
                            alt={imageAlt}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover rounded-[15px]"
                            priority
                        />
                    </div>

                    {/* Text Content Column */}
                    <div className="space-y-6">
                        <h4 className="text-sm">{h4Text}</h4>
                        <h1 className="text-2xl font-bold leading-[1.16]">{h1Text}</h1>
                        <p className="text-lg">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}