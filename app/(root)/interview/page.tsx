import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
  const user = await getCurrentUser();

  return (
    <>
      <h3 className="pb-10">Interview Generation</h3>

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
