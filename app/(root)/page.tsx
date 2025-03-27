import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import InterviewCard from "@/components/InterviewCard";

import { getCurrentUser } from "@/lib/actions/auth.action";
import { getInterviewsByUserId, getLatestInterviews } from "@/lib/actions/general.action";

import { dummyInterviews } from "@/constants"; //dummyInterviews

async function Home() {
  const user = await getCurrentUser();

  let userInterviews = [];
  let allInterview = [];

  // Fetch all interviews (available to everyone)
  //allInterviews = await getLatestInterviews({ userId: user?.id });

  // Fetch user-specific interviews only if the user is authenticated
  if (user) {
    userInterviews = await getInterviewsByUserId(user.id);
  }

  const hasPastInterviews = userInterviews?.length > 0;
  const hasUpcomingInterviews = allInterview?.length > 0;

  return (
    <>
      {/* Public Section: Always visible */}
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">
            Practice real interview questions & get instant feedback
          </p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="robo-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>

      {/* User-Specific Section: Only visible if the user is authenticated */}
      {user && (
        <section className="flex flex-col gap-6 mt-8">
          <h2>Your Interviews</h2>

          <div className="interviews-section">

            {dummyInterviews.map((interview) => (  
            
            <InterviewCard {...interview}
              key={interview.id}
              userId={user?.id}
              interviewId={interview.id}
              role={interview.role}
              type={interview.type}
              techstack={interview.techstack}
              createdAt={interview.createdAt}/>
          
            ))}
            

            {/*   <p>You haven&apos;t taken any interviews yet</p> */}
           
          </div>
        </section>
      )}

      {/* Public Section: Always visible (Take Interviews) */}
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take Interviews</h2>

        <div className="interviews-section">

          {dummyInterviews.map((interview) => (
          
          <InterviewCard {...interview}
            key={interview.id}
            userId={user?.id}
            interviewId={interview.id}
            role={interview.role}
            type={interview.type}
            techstack={interview.techstack}
            createdAt={interview.createdAt}
            />
            
            ))}

            <p>There are no interviews available</p>
          
        </div>
      </section>
    </>
  );
}

export default Home;