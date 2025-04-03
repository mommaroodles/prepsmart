import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

import { testimonials } from "@/constants/testimonials"
import TestimonialCard from "./TestimonialCard"

const TestimonialsSection = () => {
    return (
        <section className="testimonials-section">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-white">Why People Love PrepSmart</h2>
                    <p className="text-xl text-white">Feedback from People using PrepSmart for Interview Preparation</p>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                        slidesToScroll: 1,
                    }}
                    className="w-full max-w-6xl mx-auto"
                >
                    <CarouselContent>
                        {testimonials.map((testimonial) => (
                            <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/4 pl-4">
                                <TestimonialCard testimonial={testimonial} index={Number(testimonial.id)} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex justify-center mt-6 gap-2">
                        <CarouselPrevious className="relative" />
                        <CarouselNext className="relative" />
                    </div>
                </Carousel>
            </div>
        </section>
    )
}

export default TestimonialsSection

