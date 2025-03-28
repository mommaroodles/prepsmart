import HeroSection from "@/components/HeroSection"
import InterviewCard from "@/components/InterviewCard"

import { getCurrentUser } from "@/lib/actions/auth.action"
import {
  getInterviewsByUserId,
  getLatestInterviews,
} from "@/lib/actions/general.action"
import Footer from "@/components/Footer"

async function Home() {
  const user = await getCurrentUser();

  const [userInterviews, allInterview] = await Promise.all([
    getInterviewsByUserId(user?.id || ""),
    getLatestInterviews({ userId: user?.id || "" }),
  ]);

  const hasPastInterviews = (userInterviews?.length ?? 0) > 0;
  const hasUpcomingInterviews = (allInterview?.length ?? 0) > 0;

  return (
    <>
      <HeroSection
        title="AI-Powered"
        subtitle="Real-Time Interview Platform"
        description2="Practice Interview Questions & Get Instant Feedback."
        buttonText="Start an Interview"
        buttonLink="/interview"
      />

      <section className="flex flex-col gap-6 mt-15">
        <h4>
          Interviews created by {}
          <span className="text-primary-200">{user?.name}</span>
        </h4>

        <div className="interviews-section">
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
                coverImage={interview.coverImage}
                level={interview.level}
                questions={interview.questions}
              />
            ))
          ) : (
            <p>You haven&apos;t taken any interviews yet</p>
          )}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h4>All Interviews</h4>

        <div className="interviews-section">
          {hasUpcomingInterviews ? (
            allInterview?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={user?.id}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
                coverImage={interview.coverImage}
                level={interview.level}
                questions={interview.questions}
              />
            ))
          ) : (
            <p>There are no interviews available</p>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home
