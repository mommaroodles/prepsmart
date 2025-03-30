import Image from "next/image";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import Agent from "@/components/Agent";
import { getRandomInterviewCover } from "@/lib/utils";
import {
  getFeedbackByInterviewId,
  getInterviewById,
} from "@/lib/actions/general.action";
import { getCurrentUser } from "@/lib/actions/auth.action";
import DisplayTechIcons from "@/components/DisplayTechIcons";

const InterviewDetails = async ({ params }: RouteParams) => {
  const { id } = await params;

  const user = await getCurrentUser();

  const interview = await getInterviewById(id);
  if (!interview) redirect("/");

  const feedback = await getFeedbackByInterviewId({
    interviewId: id,
    userId: user?.id || '',
  });

  return (
    <>
      <div className="flex flex-row gap-4 justify-between mb-10">
        <div className="flex flex-row gap-4 items-center max-sm:flex-col">
          <div className="flex flex-row gap-4 items-center">
            <Image
              src={getRandomInterviewCover()}
              alt="cover-image"
              width={40}
              height={40}
              className="rounded-full object-cover size-[40px]"
            />
            <h4 className="capitalize">{interview.role} Interview</h4>
            <DisplayTechIcons techStack={interview.techstack} />
            <Button variant="outline">{interview.type.charAt(0).toUpperCase() + interview.type.slice(1)} Interview Type</Button>
          </div>
        </div>
      </div>

      <Agent
        userName={user?.name || ""}
        userId={user?.id}
        userAvatar={user?.photoURL}
        interviewId={id}
        type="interview"
        questions={interview.questions}
        feedbackId={feedback?.id}
      />
    </>
  );
};

export default InterviewDetails;