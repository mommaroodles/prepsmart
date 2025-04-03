"use client"

import HeroSection from "@/components/HeroSection";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";
import { FcApproval } from "react-icons/fc";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import CTAButton from "@/components/CTAButton";
import { ContentWithImage } from "@/components/ui/content-with-image";

function HomePage() {
    return (
        <>

            <main className="pt-5 justify-evenly">
                <HeroSection
                    title="AI Powered"
                    subtitle="Real Time Interview Platform"
                    description="Practice Interview Questions & Get Instant Feedback."
                    buttonText="Start Your Interview"
                    buttonLink="/sign-in" />

                <h2 className="text-3xl font-bold mb-4 text-white text-center">Nail Your Job Interviews with PrepSmart</h2>

                <p className="w-3/5 mx-auto text-xl text-center">
                    Improve your interview skills with our <span className="animate-pulse TextGradient font-semibold text-[24px]">AI-Powered</span> mock interview platform that simulate real-life interviews, allowing you to polish your responses, correct errors, and elevate your confidence to new heights. Get interview-ready, the PrepSmart way.
                </p>
                <section>
                    <div className="flex flex-wrap justify-center items-center gap-6 my-20 text-foreground">
                        <Card className="w-[45%] max-sm:w-full min-h-[300px] border border-border bg-card shadow-md hover:shadow-lg transition-shadow duration-300 px-5 py-5">
                            <CardTitle><FcApproval size={56} /></CardTitle>
                            <CardDescription>
                                <h3 className="pb-1 text-white">Better Job Opportunities</h3>
                                <p className="text-lg">Get ahead of the competition with practical feedback! You&apos;ll have an advantage over your peers and boost your chances of success during interviews.</p>
                            </CardDescription>
                        </Card>

                        <Card className="w-[45%] max-sm:w-full min-h-[300px] border border-border bg-card shadow-md hover:shadow-lg transition-shadow duration-300 px-5 py-5">
                            <CardTitle><FcApproval size={56} /></CardTitle>
                            <CardDescription>
                                <h3 className="pb-1 text-white">Be Better Prepared</h3>
                                <p className="text-lg">No need to feel nervous before your next interview! Try out our AI interview tool to boost your confidence and get comfortable with common interview questions.</p>
                            </CardDescription>
                        </Card>
                        <Card className="w-[45%] max-sm:w-full min-h-[300px] border border-border bg-card shadow-md hover:shadow-lg transition-shadow duration-300 px-5 py-5">
                            <CardTitle><FcApproval size={56} /></CardTitle>
                            <CardDescription>
                                <h3 className="pb-1 text-white">Practice Makes Perfect</h3>
                                <p className="text-lg">Answer typical interview questions via our interface. Feel the real interview pressure but in a safe practice environment and in the comfort of your home.</p>
                            </CardDescription>
                        </Card>

                        <Card className="w-[45%] max-sm:w-full min-h-[300px] border border-border bg-card shadow-md hover:shadow-lg transition-shadow duration-300 px-5 py-5">
                            <CardTitle><FcApproval size={56} /></CardTitle>
                            <CardDescription>
                                <h3 className="pb-1 text-white">Instant Feedback</h3>
                                <p className="text-lg">Get feedback instantly and real-time insights to refine responses and build confidence and turn your weaknesses into strengths.</p>
                            </CardDescription>
                        </Card>
                    </div>
                </section>
                <section>
                    {/* Call to Action Button */}
                    <div className="flex justify-center items-center pb-16">
                        <CTAButton
                            buttonText="Start Practicing for Free"
                            buttonLink="/sign-in" />
                    </div>
                </section>
                <section>
                    <ContentWithImage
                        h4Text="PRACTICE TODAY, SUCCEED TOMORROW"
                        h1Text="Stay Cool and Confident in Interviews"
                        description="Feeling nervous? It happens to everyone—your mind goes blank, you ramble, or you forget key points. But with the right practice, you can walk into any interview feeling calm and in control. Our AI-powered interview platform give you a stress-free way to practice, build confidence, and sharpen your responses so you can crush the real thing."
                        imageSrc="/homepage/woman-in-an-office-being-interviewed.jpg"
                        imageAlt="Woman in office being interviewed"
                        imageLeft={false}
                        isLargeImage={false}
                    />
                </section>
                <section>
                    <ContentWithImage
                        h4Text="BE THE CANDIDATE THEY CAN'T IGNORE"
                        h1Text="Handle Any Interview Question Like a Pro"
                        description="Unexpected questions? No problem. Whether it's a tricky curveball, a tough behavioral scenario, or a challenging technical question, you've got this. Our AI interview platform throws realistic, tough questions your way, helping you practice thinking on your feet. With instant feedback, you'll refine your answers and walk into your next interview ready for anything."
                        imageSrc="/homepage/man-in-an-interview-office.jpg"
                        imageAlt="Man sitting in a office conducting an interview"
                        imageLeft={true}
                        isLargeImage={false}
                    />
                </section>
                <section>
                    {/* Testimonials */}
                    <TestimonialsSection />
                </section>
            </main>

        </>
    );
}

export default HomePage;

