"use client"
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-gray-800 p-4 sticky top-0 left-0 right-0">
            <div className="flex  justify-between">
                <div className="text-white">Memories</div>

                {/* Desktop Nav Links */}
                <div className="hidden md:flex space-x-4">
                    <Link href="/" className="text-white">Home</Link>
                    <Link href="/profile" className="text-white">Profile</Link>
                </div>

                {/* Mobile Nav Links */}
                <div className="md:hidden">
                    <button onClick={toggleMobileMenu} className="text-white">
                        ❌
                    </button>

                    {isMobileMenuOpen && (
                        <div className="mt-4 flex flex-col gap-y-3 ">
                            <Link href="/" className="block text-white">Home</Link>
                            <Link href="/profile" className="block text-white">Profile</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
