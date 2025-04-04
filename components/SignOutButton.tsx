"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { signOut } from "@/lib/actions/auth.action";

const SignOutButton = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    try {
      setIsLoading(true);
      await signOut();
      toast.success("Signed out successfully");
      router.push("/"); //return to home page after signout
    } catch (error) {
      console.error("Error signing out:", error);
      toast.error("Failed to sign out");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      variant="destructive"
      size="icon"
      onClick={handleSignOut}
      disabled={isLoading}
      className="text-white hover:text-primary-100 hover:bg-dark-200 cursor-pointer"
      title="Sign Out"
    >
      <LogOut size={28} />
    </Button>
  );
};

export default SignOutButton;
