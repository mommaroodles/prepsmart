import { Button } from "@/components/ui/button";
import AuthCard from "./AuthCard";
import AuthHeader from "./AuthHeader";

interface VerificationScreenProps {
  userEmail: string;
  isResending: boolean;
  isChecking: boolean;
  onResendVerification: () => Promise<void>;
  onCheckVerification: () => Promise<void>;
  onBackToSignIn: () => void;
}

const VerificationScreen = ({
  userEmail,
  isResending,
  isChecking,
  onResendVerification,
  onCheckVerification,
  onBackToSignIn,
}: VerificationScreenProps) => {
  return (
    <AuthCard>
      <AuthHeader title="Email Verification Required" />

      <div className="text-center">
        <p className="mb-4">
          A verification email has been sent to: {}
          <span className="text-amber-600 text-xl font-semibold">
            {userEmail}
          </span>
        </p>

        <p className="mb-6 text-sm text-light-300">
          Please check your inbox and click the verification link. If you
          don&apos;t see the email, check your spam folder.
        </p>

        <div className="flex flex-col gap-4 items-center">
          <Button
            onClick={onResendVerification}
            disabled={isResending}
            className="bg-amber-200 hover:bg-amber-300"
          >
            {isResending ? "Sending..." : "Resend Verification Email"}
          </Button>

          <Button
            onClick={onCheckVerification}
            disabled={isChecking}
            className="bg-success-200 hover:bg-success-300"
          >
            {isChecking ? "Checking..." : "I've Verified My Email"}
          </Button>

          <Button
            variant="outline"
            onClick={onBackToSignIn}
            className="mt-2 w-full hover:bg-slate-800 cursor-pointer"
            type="button"
          >
            Back to Sign In
          </Button>
        </div>
      </div>
    </AuthCard>
  );
};

export default VerificationScreen;
