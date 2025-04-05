"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "motion/react";

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!isMenuOpen);

    return (
        <header className="fixed top-0 left-0 w-full bg-background border-b border-dark-300 z-50 shadow-md">
            <nav className="w-full flex items-center justify-between px-6 py-4">
                {/* Left: Logo */}
                <div className="flex items-center">
                    <Logo link />
                </div>

                {/* Center: Desktop Navigation */}
                <div className="hidden md:flex gap-6">
                    <Link href="/how-it-works">
                        <Button variant="ghost">How it Works</Button>
                    </Link>
                    <Link href="https://www.wpdevs.co.za/#about">
                        <Button variant="ghost">About</Button>
                    </Link>
                    <Link href="https://www.wpdevs.co.za/#contact">
                        <Button variant="ghost">Contact</Button>
                    </Link>
                </div>

                {/* Right: Hamburger (Mobile Only) */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        aria-label="Toggle mobile menu"
                        className="p-2"
                    >
                        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Dropdown with Animation */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="md:hidden absolute top-full left-0 w-full bg-background border-t border-dark-300 shadow-md"
                        role="menu"
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
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
