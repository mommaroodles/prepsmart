import { ReactNode } from "react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

interface AuthCardProps {
  children: ReactNode;
}

const AuthCard = ({ children }: AuthCardProps) => {
  return (
    <Card className="w-[450px]">
      <div>
        <CardContent>
          <div>{children}</div>
          </CardContent>
     </div>
    </Card>
    
  );
};

export default AuthCard;
