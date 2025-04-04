import InterviewCard from "@/components/InterviewCard";
import { getCurrentUser } from "@/lib/actions/auth.action";
import {
  getInterviewsByUserId,
  getLatestInterviews,
} from "@/lib/actions/general.action";
import Footer from "@/components/Footer";
//import { Suspense } from 'react';

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

  return (
    <>
      <h1 className="text-2xl">Dashboard</h1>
      <hr></hr>
      <p className="text-lg">Your dashboard lists all the interviews you have taken and you can take as many interviews as you need. To get started</p>

      <section className="flex flex-col gap-6 mt-15">
        <h5>
          Interviews created by { }
          <span className="text-blue-500">{user?.name}</span>
        </h5>

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
        <h5>All Interviews</h5>

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
            <p>There are no interviews available. Please check back later.</p>
          )}
        </div>

      </section>

      <Footer />
    </>
  );
}

export default Dashboard;
