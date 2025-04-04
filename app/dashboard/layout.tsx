import { ReactNode } from "react";
import { redirect } from "next/navigation";
import Footer from "@/components/Footer";
//import { Button } from "@/components/ui/button"

import { isAuthenticated, getCurrentUser } from "@/lib/actions/auth.action";
import SignOutButton from "@/components/SignOutButton";
import Logo from "@/components/Logo";
import AvatarPicker from "@/components/avatar/AvatarPicker";
import { Toaster } from "@/components/ui/sonner"
//import Link from "next/link";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
    const isUserAuthenticated = await isAuthenticated();
    if (!isUserAuthenticated) redirect("/sign-up");

    // Get current user data
    const user = await getCurrentUser();

    // Default avatar path if user doesn't have one set
    const userAvatar = user?.photoURL || "/user-avatar.jpg";

    return (
        <div className="root-layout">
            {/* Fixed Navbar */}
            <header className="fixed top-0 left-0 w-full bg-background border-b border-dark-300 z-50 shadow-md">
                <nav className="w-full grid grid-cols-2 justify-start items-center px-6 py-4">
                    <Logo link />

                    {/* User profile section */}
                    {user && (
                        <div className="flex items-center justify-end gap-3">
                            <AvatarPicker
                                currentAvatar={userAvatar}
                                userId={user.id}
                                userName={user.name}
                            />
                            <SignOutButton />
                        </div>
                    )}
                </nav>
            </header>

            {/* Main Content */}
            <main className="pt-[50px] pb-[50px]">{children}</main>
            <Toaster position="top-right" richColors />
            <Footer />
        </div>
    );
};

export default DashboardLayout;