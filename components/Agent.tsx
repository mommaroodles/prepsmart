"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

import { cn } from "@/lib/utils"
import { vapi } from "@/lib/vapi.sdk"
import { interviewer } from "@/constants"
import { createFeedback } from "@/lib/actions/general.action"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "./ui/button"


enum CallStatus {
  INACTIVE = "INACTIVE",
  CONNECTING = "CONNECTING",
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
  CANCELLED = "CANCELLED",
}

interface SavedMessage {
  role: "user" | "system" | "assistant";
  content: string;
}

const Agent = ({
  userName,
  userId,
  interviewId,
  feedbackId,
  type,
  questions,
  userAvatar,
}: AgentProps) => {
  const router = useRouter();
  const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
  const [messages, setMessages] = useState<SavedMessage[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [lastMessage, setLastMessage] = useState<string>("");

  useEffect(() => {
    const onCallStart = () => {
      setCallStatus(CallStatus.ACTIVE);
    };

    const onCallEnd = () => {
      setCallStatus(CallStatus.FINISHED);
    };

    const onMessage = (message: Message) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        const newMessage = { role: message.role, content: message.transcript };
        setMessages((prev) => [...prev, newMessage]);
      }
    };

    const onSpeechStart = () => {
      console.log("Speech start!");
      setIsSpeaking(true);
    };

    const onSpeechEnd = () => {
      console.log("Speech end!");
      setIsSpeaking(false);
    };

    const onError = (error: Error) => {
      console.log("Error:", error);
    };

    vapi.on("call-start", onCallStart);
    vapi.on("call-end", onCallEnd);
    vapi.on("message", onMessage);
    vapi.on("speech-start", onSpeechStart);
    vapi.on("speech-end", onSpeechEnd);
    vapi.on("error", onError);

    return () => {
      vapi.off("call-start", onCallStart);
      vapi.off("call-end", onCallEnd);
      vapi.off("message", onMessage);
      vapi.off("speech-start", onSpeechStart);
      vapi.off("speech-end", onSpeechEnd);
      vapi.off("error", onError);
    };
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      setLastMessage(messages[messages.length - 1].content);
    }

    const handleGenerateFeedback = async (messages: SavedMessage[]) => {
      console.log("handleGenerateFeedback");

      const { success, feedbackId: id } = await createFeedback({
        interviewId: interviewId!,
        userId: userId!,
        transcript: messages,
        feedbackId,
      });

      if (success && id) {
        router.push(`/interview/${interviewId}/feedback`);
      } else {
        console.log("Error saving feedback");
        router.push("/");
      }
    };

    if (callStatus === CallStatus.FINISHED) {
      if (type === "generate") {
        router.push("/");
      } else {
        handleGenerateFeedback(messages);
      }
    }
  }, [messages, callStatus, feedbackId, interviewId, router, type, userId]);

  const handleCall = async () => {
    setCallStatus(CallStatus.CONNECTING);

    if (type === "generate") {
      await vapi.start(process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID!, {
        variableValues: {
          username: userName,
          userid: userId,
        },
      });
    } else {
      let formattedQuestions = "";
      if (questions) {
        formattedQuestions = questions
          .map((question) => `- ${question}`)
          .join("\n");
      }

      await vapi.start(interviewer, {
        variableValues: {
          questions: formattedQuestions,
        },
      });
    }
  };

  const handleDisconnect = () => {
    setCallStatus(CallStatus.FINISHED);
    vapi.stop();
  };

  const handleCallCancelled = () => {
    setCallStatus(CallStatus.CANCELLED);
    vapi.stop();
    router.push("/");
  };

  return (
    <>
      <div className="flex flex-row justify-center items-center gap-8 w-full">
        {/* AI Interviewer Card */}
        <Card className="w-100 bg-black">
          <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
            <div className="relative">
              <Image
                src="/ai-avatar-512.png"
                alt="AI Avatar"
                width={120}
                height={120}
                className="object-cover rounded-full"
              />
              {isSpeaking && <span className="absolute bottom-0 right-0 animate-speak" />}
            </div>
            <CardTitle className="text-center">AI Interviewer</CardTitle>
          </CardContent>
        </Card>

        {/* User Profile Card */}
        <Card className="w-100 bg-neutral-950">
          <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
            <Image
              src={userAvatar || "/user-avatar.jpg"}
              alt="profile-image"
              width={120}
              height={120}
              className="rounded-full object-cover"
            />
            <CardTitle className="text-center">{userName}</CardTitle>
          </CardContent>
        </Card>
      </div>

      {messages.length > 0 && (
        <div className="transcript-border mt-6">
          <div className="transcript">
            <p
              key={lastMessage}
              className={cn("transition-opacity duration-500 opacity-0", "animate-fadeIn opacity-100")}
            >
              {lastMessage}
            </p>
          </div>
        </div>
      )}

      <div className="w-full flex justify-center gap-4 mt-6">
        {/* Start Call Button */}
        {callStatus !== "ACTIVE" && (
          <Button className="relative font-semibold" onClick={() => handleCall()}>
            <span
              className={cn("absolute animate-ping opacity-75", callStatus !== "CONNECTING" && "hidden")}
            />
            <span className="relative">
              {callStatus === "INACTIVE" || callStatus === "FINISHED" || callStatus === "CANCELLED"
                ? "Start Your Interview"
                : ". . ."}
            </span>
          </Button>
        )}

        {/* End Call Button */}
        {callStatus !== "INACTIVE" && (
          <button className="" onClick={() => handleCallCancelled()}>
            {callStatus === "CANCELLED" ? "Cancel Call" : "End Call"}
          </button>
        )}
      </div>
    </>
  );
};

export default Agent;