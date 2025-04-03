import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";

import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import DisplayTechIcons from "./DisplayTechIcons";

/* Icons */
import { FaPersonCircleQuestion, FaStar } from "react-icons/fa6";
import { FaRegCalendarAlt, FaArrowRight } from "react-icons/fa";


import { cn, getRandomInterviewCover } from "@/lib/utils";
import { getFeedbackByInterviewId } from "@/lib/actions/general.action";


const InterviewCard = async ({
  interviewId,
  userId,
  role,
  type,
  techstack,
  createdAt,
  coverImage,
  level,
  questions,
}: InterviewCardProps) => {
  const feedback =
    userId && interviewId
      ? await getFeedbackByInterviewId({
        interviewId,
        userId,
      })
      : null;

  // Interview Type
  const getBadgeVariant = (type: string) => {
    switch (type.toLowerCase()) {
      case "technical":
        return "bg-blue-400 text-zinc-900"
      case "behavioral":
        return "bg-emerald-400 text-zinc-900"
      case "mixed":
        return "bg-violet-400 text-zinc-900"
      default:
        return "bg-primary text-primary-foreground"
    }
  }
  const normalizedType = /mix/gi.test(type) ? "Mixed" : type
  const badgeColor = getBadgeVariant(type)


  // Level badge color mapping
  // New level badge variant function using switch statement
  const getLevelBadgeVariant = (level: string) => {
    switch (level.toLowerCase()) {
      case "entry":
        return "bg-emerald-400"
      case "beginner":
        return "bg-teal-400"
      case "junior":
        return "bg-lime-400"
      case "intermediate":
        return "bg-amber-200"
      case "senior":
        return "bg-orange-400"
      case "advanced":
        return "bg-sky-400"
      case "expert":
        return "bg-indigo-400"
      default:
        return "bg-green-400"
    }
  }

  // Normalize the level value with a fallback
  const normalizedLevel = level?.toLowerCase() === "unspecified" || !level ? "beginner" : level.toLowerCase()
  const levelBadgeColor = getLevelBadgeVariant(normalizedLevel)

  //date format
  const formattedDate = dayjs(
    feedback?.createdAt || createdAt || Date.now(),
  ).format("D MMM, YYYY");

  // Use coverImage from props if available, otherwise use random cover
  const imageSrc = coverImage || getRandomInterviewCover();

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
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-primary/5 -m-1 blur-sm"></div>
          <Image
            src={imageSrc}
            alt="cover-image"
            width={90}
            height={90}
            className="rounded-full object-cover size-[90px] border-2 border-muted bg-card relative z-10"
          />
        </div>

        {/* Interview Role */}
        <h3 className="mt-3 text-xl font-semibold text-center capitalize text-foreground">{role} Interview</h3>

        {/* Level */}
        <div className={cn("flex flex-row justify-items-center gap-4 mt-4 rounded-full px-4 py-2", levelBadgeColor)}>
          <FaPersonCircleQuestion size={18} className="text-zinc-950 font-semibold" />
          <p className="text-sm text-zinc-950 font-semibold">
            {normalizedLevel.charAt(0).toUpperCase() + normalizedLevel.slice(1)} Level
          </p>
        </div>


        {/* Date */}
        <div className="flex flex-row justify-center gap-5 mt-4 bg-muted/50 rounded-full px-4 py-2">
          <div className="flex flex-row gap-2 items-center">
            <FaRegCalendarAlt size={18} className="text-neutral-50" />
            <p className="text-sm text-muted-foreground">{formattedDate}</p>
          </div>
          {/* Score */}
          <div className="flex flex-row gap-2 items-center">
            <FaStar size={18} className="text-amber-500" />
            <p className="text-sm font-medium">
              {feedback?.totalScore || "---"}
              <span className="text-muted-foreground">/100</span>
            </p>
          </div>
        </div>

        {/* Number of Questions */}
        <div className="flex flex-row items-center gap-5 mt-4 bg-muted/50 rounded-full px-4 py-2">
          <FaPersonCircleQuestion size={18} className="text-neutral-50" />
          <p className="text-xs">
            {questions?.length || 0} {questions?.length === 1 ? "Question" : "Questions"}
          </p>
        </div>

        {/* Feedback or Placeholder Text */}
        <div className="mt-6 bg-muted/30 rounded-lg p-4 w-full">
          <p className="line-clamp-2 text-sm text-muted-foreground text-center">
            {feedback?.finalAssessment || "You have not taken this interview yet. Take it now to improve your skills."}
          </p>
        </div>
      </CardContent>

      <CardFooter className="flex flex-row justify-between p-6 pt-0 mt-auto">
        {/* Technology Icons */}
        <DisplayTechIcons techStack={techstack} />

        <Button className="transition-all duration-300">
          <Link
            href={feedback ? `/dashboard/interview/${interviewId}/feedback` : `/dashboard/interview/${interviewId}`}
            className="flex items-center gap-2"
          >
            {feedback ? (
              <>
                Check Feedback
                <FaArrowRight size={4} className="text-neutral-800" />
              </>
            ) : (
              <>
                Take this Interview
                <FaArrowRight size={4} className="text-neutral-800" />
              </>
            )}
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InterviewCard;
