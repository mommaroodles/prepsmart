import {
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import Logo from "../Logo";

interface AuthHeaderProps {
  title: string;
  description: string;
}

const AuthHeader = ({ description }: AuthHeaderProps) => {
  return (


    <CardHeader>
      <div className="flex items-center justify-center">
        <Logo />
      </div>
      <CardDescription className="text-center text-lg">{description}</CardDescription>
    </CardHeader>



  );
};

export default AuthHeader;
