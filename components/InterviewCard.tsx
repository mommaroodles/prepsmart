import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

import { Button } from "./ui/button";
import DisplayTechIcons from "./DisplayTechIcons";

import { cn, getRandomInterviewCover } from "@/lib/utils";
import { getFeedbackByInterviewId } from "@/lib/actions/general.action";

const InterviewCard = async ({
  interviewId,
  userId,
  role,
  type,
  techstack,
  createdAt,
}: InterviewCardProps) => {

  const feedback = null as Feedback | null;

/*   const feedback =
    userId && interviewId
      ? await getFeedbackByInterviewId({
          interviewId,
          userId,
        })
      : null; */ // commented out to avoid api calls

  const normalizedType = /mix/gi.test(type) ? "Mixed" : type; //gi global case insensitive

  const badgeColor =
    {
      Behavioral: "bg-light-400",
      Mixed: "bg-light-600",
      Technical: "bg-light-800",
    }[normalizedType] || "bg-light-600";

  const formattedDate = dayjs(
    feedback?.createdAt || createdAt || Date.now()
  ).format("MMM D, YYYY");

  return (
<Card className="w-[360px] max-sm:w-full min-h-[450px] relative overflow-hidden border border-border bg-card shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/10 to-transparent h-24 z-0"></div>

      {/* Type Badge */}
      <div className={cn("absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg z-10", badgeColor)}>
        <p className="text-sm font-medium">{normalizedType}</p>
      </div>

      <CardContent className="p-6 pt-10 flex flex-col items-center">
        {/* Cover Image */}
        <div className="relative mb-4">
          <div className="absolute inset-0 rounded-full bg-gradient-to-b from-primary/20 to-primary/5 -m-1 blur-sm"></div>
          <Image
            src={getRandomInterviewCover() || "/placeholder.svg"}
            alt="cover-image"
            width={90}
            height={90}
            className="rounded-full object-cover size-[90px] border-2 border-muted bg-card relative z-10"
          />
        </div>

        {/* Interview Role */}
        <h3 className="mt-3 text-xl font-semibold text-center capitalize text-foreground">{role} Interview</h3>

        {/* Date & Score */}
        <div className="flex flex-row justify-center gap-5 mt-4 bg-muted/50 rounded-full px-4 py-2">
          <div className="flex flex-row gap-2 items-center">
            {/* Calendar Icon */}
            <svg
              className="w-5 h-5 text-muted-foreground"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
              <line x1="16" x2="16" y1="2" y2="6" />
              <line x1="8" x2="8" y1="2" y2="6" />
              <line x1="3" x2="21" y1="10" y2="10" />
            </svg>
            <p className="text-sm text-muted-foreground">{formattedDate}</p>
          </div>

          <div className="flex flex-row gap-2 items-center">
            {/* Star Icon */}
            <svg
              className="w-5 h-5 text-amber-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <p className="text-sm font-medium">
              {feedback?.totalScore || "---"}
              <span className="text-muted-foreground">/100</span>
            </p>
          </div>
        </div>

        {/* Feedback or Placeholder Text */}
        <div className="mt-6 bg-muted/30 rounded-lg p-4 w-full">
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {feedback?.finalAssessment || "You haven't taken this interview yet. Take it now to improve your skills."}
          </p>
        </div>
      </CardContent>

      <CardFooter className="flex flex-row justify-between p-6 pt-0 mt-auto">
        <DisplayTechIcons techStack={techstack} />

        <Button variant={feedback ? "default" : "secondary"} className="transition-all duration-300">
          <Link
            href={feedback
              ? `/interview/${interviewId}/feedback`
              : `/interview/${interviewId}`}
            className="flex items-center gap-2"
          >
            {feedback ? (
              <>
                Check Feedback
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </>
            ) : (
              <>
                View Interview
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </>
            )}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InterviewCard;
