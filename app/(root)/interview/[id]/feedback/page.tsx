import dayjs from "dayjs";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FaStar } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";

import {
  getFeedbackByInterviewId,
  getInterviewById,
} from "@/lib/actions/general.action";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Feedback = async ({ params }: RouteParams) => {
  const { id } = await params;
  const user = await getCurrentUser();

  const interview = await getInterviewById(id);
  if (!interview) redirect("/");

  const feedback = await getFeedbackByInterviewId({
    interviewId: id,
    userId: user?.id ?? "",
  });

  return (
    <section className="section-feedback mt-15">
      <div className="flex flex-row justify-center">
        <h3 className="text-2xl font-semibold text-light-300">
          Feedback on the Interview -{" "}
          <span className="capitalize">{interview.role}</span> Interview
        </h3>
      </div>

      <div className="flex flex-row justify-center ">
        <div className="flex flex-row gap-5">
          {/* Overall Impression */}
          <div className="flex flex-row gap-2 items-center">
            <FaStar size={18} className="text-light-300" />
            <p>
              Overall Impression:{" "}
              <span className="text-light-300">
                {feedback?.totalScore}
              </span>
              /100
            </p>
          </div>

          {/* Date */}
          <div className="flex flex-row gap-2">
            <FaRegCalendarAlt size={18} className="text-light-300" />
            <p>
              {feedback?.createdAt
                ? dayjs(feedback.createdAt).format("D MMM, YYYY h:mm A")
                : "N/A"}
            </p>
          </div>
        </div>
      </div>

      <hr />

      <p>{feedback?.finalAssessment}</p>

      {/* Interview Breakdown */}
      <div className="flex flex-col gap-3">
        <h4 className="text-light-300">Breakdown of the Interview:</h4>
        {feedback?.categoryScores?.map((category, index) => (
          <div key={index}>
            <p className="font-bold text-light-300">
              {index + 1}. {category.name} ({category.score}/100)
            </p>
            <p>{category.comment}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <h4 className="text-light-300">Strengths</h4>
        <ul className="text-light-300">
          {feedback?.strengths?.map((strength, index) => (
            <li key={index} className="text-light-300">{strength}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3">
        <h4 className="text-light-300">Areas for Improvement</h4>
        <ul>
          {feedback?.areasForImprovement?.map((area, index) => (
            <li key={index} className="text-light-300">{area}</li>
          ))}
        </ul>
      </div>

      <div className="buttons pb-20">
        <Button>
          <Link href="/" className="flex w-full justify-center">
            <p className="text-sm font-semibold text-black text-center">
              Back to dashboard
            </p>
          </Link>
        </Button>

        <Button>
          <Link
            href={`/interview/${id}`}
            className="flex w-full justify-center"
          >
            <p className="text-sm font-semibold text-black text-center">
              Retake Interview
            </p>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Feedback;
