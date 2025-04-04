import InterviewCard from "@/components/InterviewCard";
import { getCurrentUser } from "@/lib/actions/auth.action";
import {
  getInterviewsByUserId,
  getLatestInterviews,
} from "@/lib/actions/general.action";
import Footer from "@/components/Footer";
//import { Suspense } from 'react';
import { buttonVariants } from "@/components/ui/button";

// Ensure buttonVariants is correctly implemented in "@/components/ui/button" to return appropriate class names.
import Link from "next/link";

async function Dashboard() {
  const user = await getCurrentUser();

  const [userInterviews, allInterview] = await Promise.all([
    getInterviewsByUserId(user?.id || ""),
    getLatestInterviews({ userId: user?.id || "" }),

    //getInterviewsByUserId(user?.id!),
    //getLatestInterviews({ userId: user?.id! }),
  ]);

  const hasPastInterviews = (userInterviews?.length ?? 0) > 0;
  const hasUpcomingInterviews = (allInterview?.length ?? 0) > 0;

  const startNewInterviewButtonClass = buttonVariants({ variant: "default" });

  return (
    <>
      <h1 className="text-3xl pb-3">Dashboard</h1>
      <hr></hr>
      <p className="text-lg pt-5">Welcome {user?.name}.</p>
      <p className="text-lg pt-3">Your dashboard lists all the interviews you have taken and you can take as many interviews as you need. You will also find additional practice interviews listed below.</p>

      <section className="flex flex-col gap-6 mt-15">
        <h5 className="text-2xl">Interviews you have taken</h5>


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
            <>
              <section className="flex flex-col gap-6">
                <p className="text-lg mb-2">You haven&apos;t taken any interviews yet. Start one now!</p>
                <p className="mt-1">
                  <Link
                    href="/dashboard/interview"
                    className={startNewInterviewButtonClass}
                  >
                    Start New Interview
                  </Link>
                </p>
              </section>
            </>
          )}

        </div>

      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h5 className="text-2xl">Available Practice Interviews</h5>

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
            <p className="text-lg">There are no interviews available. Please check back later.</p>
          )}
        </div>

      </section>

      <Footer />
    </>
  );
}

export default Dashboard;
