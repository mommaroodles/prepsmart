import Link from "next/link";
import Image from "next/image";

import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { isAuthenticated } from "@/lib/actions/auth.action";

export const metadata: Metadata = {
  title: 'Welcome to PrepSmart',
  description: 'Get Interview-Ready with AI-Powered Practice & Feedback',
  image: '/logo.svg',
  url: 'https://prepsmart.wpdevs.co.za',
  type: 'website',  
}

const Layout = async ({ children }: { children: ReactNode }) => {
  // these two lines also appear in the auth/layout.tsx file
  //const isUserAuthenticated = await isAuthenticated();
  //if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout">
      <nav>
        <Link href="/" className="flex items-center gap-2">
          {/* <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} /> */}
          <h2 className="text-primary-100">PrepSmart</h2>
        </Link>
      </nav>

      {children}
    </div>
  );
};

export default Layout;
