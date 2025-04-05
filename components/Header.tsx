"use client"

// header when user is not logged in

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";


const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    return (
        <header className="fixed top-0 left-0 w-full bg-background border-b border-dark-300 z-50 shadow-md">
            <nav className="w-full grid grid-cols-3 md:grid-cols-3 items-center px-6 py-4">
                {/* Left Column: Logo */}
                <div className="flex justify-start">
                    <Logo link />
                </div>

                {/* Middle Column: Desktop Navigation */}
                <div className="hidden md:flex justify-center">
                    <ul className="flex gap-6">
                        <li>
                            <Link href="/how-it-works">
                                <Button variant="ghost">How it Works</Button>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.wpdevs.co.za/#about">
                                <Button variant="ghost">About</Button>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.wpdevs.co.za/#contact">
                                <Button variant="ghost">Contact</Button>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Right Column: Mobile Hamburger Button */}
                <div className="flex justify-end md:hidden">
                    <button
                        onClick={toggleMenu}
                        aria-label="Toggle mobile menu"
                        className="p-2 mr-0"
                    >
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown (renders only on mobile) */}
            {isMenuOpen && (
                <div
                    className="md:hidden absolute top-full justify-items-center left-0 w-full bg-background border-t border-dark-300 shadow-md"
                    role="menu" // Add a role for better accessibility
                    aria-hidden={!isMenuOpen}
                >
                    <ul className="flex flex-col gap-4 px-6 py-4">
                        <li>
                            <Link href="/how-it-works">
                                <Button variant="ghost">How it Works</Button>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.wpdevs.co.za/#about">
                                <Button variant="ghost">About</Button>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.wpdevs.co.za/#contact">
                                <Button variant="ghost">Contact</Button>
                            </Link>
                        </li>
                    </ul>
                </div>

            )}
        </header>
    );
};

export default Header;

