'use client'
import React, { useState } from 'react';
import { FaArrowsLeftRight } from "react-icons/fa6";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`fixed top-0 left-0 h-screen bg-gray-800 text-white transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-[calc(100%-3rem)]'} w-72`}>
            <button className="absolute top-1/2 transform -translate-y-1/2 right-[-1.5rem] p-2 bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none z-10" onClick={toggleNavbar}>
                <FaArrowsLeftRight />
            </button>
            <h1 className="text-3xl font-bold p-6">Notlify</h1>
        </div>
    );
};

export default Navbar;
