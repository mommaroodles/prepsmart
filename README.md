  <br />
      <img src="https://github.com/mommaroodles/prepsmart/blob/main/public/preview.png" alt="Project Banner">
    </a>
  <br />
  
  <div>
    <img src="https://img.shields.io/badge/-Next.JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=black" alt="next.js" />
    <img src="https://img.shields.io/badge/-Vapi-white?style=for-the-badge&color=5dfeca" alt="vapi" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Firebase-black?style=for-the-badge&logoColor=white&logo=firebase&color=DD2C00" alt="firebase" />
  </div>

  <h3 text-align="center">PrepSmart: A job interview preparation platform powered by Vapi AI Voice agents</h3>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets (Code to Copy)](#snippets)
6. 🔗 [Assets](#links)
7. 🚀 [More](#more)

## <a name="introduction">🤖 Introduction</a>

Built with Next.js for the user interface and backend logic, Firebase for authentication and data storage, styled with TailwindCSS and using Vapi's voice agents, PrepSmart is a website project designed to help you learn integrating AI models with your apps. The platform offers a sleek and modern experience for job interview preparation.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- Firebase
- Tailwind CSS
- Vapi AI
- shadcn/ui
- Google Gemeni
- Zod

## Application Layout

app-ai-interviews/
├── app/                  # Next.js app directory
│   ├── (auth)/           # Authentication routes
│   ├── (dashboard)/      # After Authentication
│   ├── (root)/           # Main application routes
│   ├── api/              # API routes
│   └── layout.tsx        # Root layout
├── components/           # React components
│   ├── auth/             # Authentication components
│   ├── ui/               # UI components
│   └── ...               # Other components
├── constants/            # Application constants
├── firebase/             # Firebase configuration
├── lib/                  # Utility functions and server actions
│   ├── actions/          # Server actions
│   └── utils.ts          # Helper functions
├── public/               # Static assets
└── types/                # TypeScript type definitions

## <a name="features">🔋 Features</a>

👉 **Authentication**: Sign Up and Sign In using Google or password/email authentication handled by Firebase.

👉 **Create Interviews**: Easily generate job interviews with help of Vapi voice assistants and Google Gemini.

👉 **Get feedback from AI**: Take the interview with AI voice agent, and receive instant feedback based on your conversation.

👉 **Modern UI/UX**: A sleek and user-friendly interface designed for a great experience.

👉 **Interview Page**: Conduct AI-driven interviews with real-time feedback and detailed transcripts.

👉 **Dashboard**: Manage and track all your interviews with easy navigation.

👉 **Responsiveness**: Fully responsive design that works seamlessly across devices.

and many more, including code architecture and reusability

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone
cd prepmaster
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
NEXT_PUBLIC_VAPI_WEB_TOKEN=
NEXT_PUBLIC_VAPI_WORKFLOW_ID=

GOOGLE_GENERATIVE_AI_API_KEY=

NEXT_PUBLIC_BASE_URL=

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_PROJECT_ID=
FIREBASE_CLIENT_EMAIL=
FIREBASE_PRIVATE_KEY=
```

Replace the placeholder values with your actual **[Firebase](https://firebase.google.com/)**, **[Vapi](https://vapi.ai/** credentials.

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

<details>
<summary><code>Generate feedback prompt (lib/actions/general.action.ts):</code></summary>

```javascript
prompt: `
        You are an AI interviewer analyzing a mock interview. Your task is to evaluate the candidate based on structured categories. Be thorough and detailed in your analysis. Don't be lenient with the candidate. If there are mistakes or areas for improvement, point them out.
        Transcript:
        
        ${formattedTranscript}

        Please score the candidate from 0 to 100 in the following areas. Do not add categories other than the ones provided:
        - **Communication Skills**: Clarity, articulation, structured responses.
        - **Technical Knowledge**: Understanding of key concepts for the role.
        - **Problem-Solving**: Ability to analyze problems and propose solutions.
        - **Cultural & Role Fit**: Alignment with company values and job role.
        - **Confidence & Clarity**: Confidence in responses, engagement, and clarity.
        `,
system:
        "You are a professional interviewer analyzing a mock interview. Your task is to evaluate the candidate based on structured categories",
```

</details>

<details>
<summary><code>Display feedback (app/(root)/interview/[id]/feedback/page.tsx):</code></summary>

```javascript
<section className="section-feedback">
  <div className="flex flex-row justify-center">
    <h1 className="text-4xl font-semibold">
      Feedback on the Interview -{" "}
      <span className="capitalize">{interview.role}</span> Interview
    </h1>
  </div>

  <div className="flex flex-row justify-center">
    <div className="flex flex-row gap-5">
      <div className="flex flex-row gap-2 items-center">
        <Image src="/star.svg" width={22} height={22} alt="star" />
        <p>
          Overall Impression:{" "}
          <span className="text-primary-200 font-bold">
            {feedback?.totalScore}
          </span>
          /100
        </p>
      </div>

      <div className="flex flex-row gap-2">
        <Image src="/calendar.svg" width={22} height={22} alt="calendar" />
        <p>
          {feedback?.createdAt
            ? dayjs(feedback.createdAt).format("MMM D, YYYY h:mm A")
            : "N/A"}
        </p>
      </div>
    </div>
  </div>

  <hr />

  <p>{feedback?.finalAssessment}</p>

  <div className="flex flex-col gap-4">
    <h2>Breakdown of the Interview:</h2>
    {feedback?.categoryScores?.map((category, index) => (
      <div key={index}>
        <p className="font-bold">
          {index + 1}. {category.name} ({category.score}/100)
        </p>
        <p>{category.comment}</p>
      </div>
    ))}
  </div>

  <div className="flex flex-col gap-3">
    <h3>Strengths</h3>
    <ul>
      {feedback?.strengths?.map((strength, index) => (
        <li key={index}>{strength}</li>
      ))}
    </ul>
  </div>

  <div className="flex flex-col gap-3">
    <h3>Areas for Improvement</h3>
    <ul>
      {feedback?.areasForImprovement?.map((area, index) => (
        <li key={index}>{area}</li>
      ))}
    </ul>
  </div>

  <div className="buttons">
    <Button className="btn-secondary flex-1">
      <Link href="/" className="flex w-full justify-center">
        <p className="text-sm font-semibold text-primary-200 text-center">
          Back to dashboard
        </p>
      </Link>
    </Button>

    <Button className="btn-primary flex-1">
      <Link href={`/interview/${id}`} className="flex w-full justify-center">
        <p className="text-sm font-semibold text-black text-center">
          Retake Interview
        </p>
      </Link>
    </Button>
  </div>
</section>
```

</details>

