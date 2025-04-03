import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
  const user = await getCurrentUser();

  return (
    <>
      <h3 className="pb-5 text-light-300 text-center">Prepare for an Interview</h3>
      <p className="pb-10 text-light-300 text-center text-xl">Improve your interview skills and secure the position you&apos;re applying for.</p>

      <Agent
        userName={user?.name ?? ""}
        userId={user?.id}
        userAvatar={user?.photoURL}
        type="generate"
      />
    </>
  );
};

export default Page;
