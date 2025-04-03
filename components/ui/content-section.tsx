interface ContentSectionProps {
    title: string
    content: string
}

export function ContentSection({ title, content }: ContentSectionProps) {
    return (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-[48px] font-bold text-gray-900 mb-8">{title}</h2>
                    <p className="text-lg text-gray-600">{content}</p>
                </div>
            </div>
        </div>
    )
} 