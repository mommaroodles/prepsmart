import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Testimonial } from "@/constants/testimonials";
import { FaCheck, FaStar } from "react-icons/fa";

interface TestimonialCardProps {
    testimonial: Testimonial;
    index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
    const stars = Array(5).fill(0); // star ratings

    return (
        <Card className="testimonial-card h-[270px] flex flex-col">
            <div className="testimonial-header pb-1"> {/* Reduced padding */}
                <Avatar className="size-10">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.username} />
                    <AvatarFallback>{testimonial.username[0]}{index}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm">{testimonial.username}</span>
                        {testimonial.verified && (
                            <Badge variant="secondary" className="testimonial-verified-badge h-5 w-5 flex items-center justify-center p-0">
                                <FaCheck size={12} className="text-foreground" />
                            </Badge>
                        )}
                    </div>
                    <span className="text-xs text-muted-foreground">
                        {testimonial.handle}
                    </span>
                    <div className="flex gap-0.5 mt-1">
                        {stars.map((_, index) => (
                            <FaStar
                                key={index}
                                size={12}
                                className={index < testimonial.rating ? "text-yellow-500" : "text-gray-300"}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="testimonial-content">
                <p>{testimonial.content}</p>
            </div>
        </Card>
    );
}

export default TestimonialCard;