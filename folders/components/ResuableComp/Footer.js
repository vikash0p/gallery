"use client"
// components/Footer.js
import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto text-center">
                <p>&copy; {currentYear} memories technologies. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
