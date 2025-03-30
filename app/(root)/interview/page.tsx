import Agent from "@/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = async () => {
  const user = await getCurrentUser();

  return (
    <>
	<h3 className="pb-5 text-light-300 text-center">Prepare for an Interview</h3>
	<p className="pb-10 text-light-300 text-center text-xl">Improve your skills and get that Job you've always dreamed about.</p>


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
