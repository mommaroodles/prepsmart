import { testimonials } from "@/constants/testimonials";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSection = () => {
    return (
        <section className="testimonials-section">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4 text-white">
                        Why People Love PrepSmart
                    </h2>
                    <p className="text-xl text-white">
                        Feedback from People using PrepSmart for Interview Preparation
                    </p>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;