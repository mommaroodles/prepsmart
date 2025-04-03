// components/UserProfile.jsx
"use client";

import React from "react";
import SignOutButton from "@/components/SignOutButton";
import AvatarPicker from "@/components/avatar/AvatarPicker";

export default function UserProfile({ user }) {
    const userAvatar = user?.photoURL || "/user-avatar.jpg";
    return (
        <div className="flex items-center gap-3">
            <span className="text-light-100 text-lg font-medium">{user.name}</span>
            <AvatarPicker
                currentAvatar={userAvatar}
                userId={user.id}
                userName={user.name}
            />
            <SignOutButton />
        </div>
    );
}
