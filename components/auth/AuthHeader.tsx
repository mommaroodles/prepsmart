import Image from "next/image";
import {
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface AuthHeaderProps {
  title: string;
  description: string;
}

const AuthHeader = ({ title, description }: AuthHeaderProps) => {
  return (
   
      
      <CardHeader>
      <div className="flex items-center justify-center">
        <Image src="/logo-4.png" alt="PrepSmart logo" width={140} height={50} />
          </div>
          <CardTitle className="text-4xl text-center TextGradient">{title}</CardTitle>
          <CardDescription className="text-center text-lg">{description}</CardDescription>
        </CardHeader>
          
   
    
  );
};

export default AuthHeader;
