import React, { useState } from 'react';
import Logo from '../../assets/Logo3.png';
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from 'framer-motion';
import Animationview from '../../lib/AnimationCard';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const NavItem = ({ label, onClick }) => (
        <li
            onClick={onClick}
            className="relative cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
        >
            <a className="px-3 py-2 inline-block">{label}</a>
        </li>
    );

    return (
        <div className="w-full px-4 py-3 bg-white border-b-2 relative">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between h-16">

                {/* Left: Logo */}
                <div className="flex-shrink-0">
                    <img src={Logo} alt="Logo" className="h-32 w-36 object-contain " />
                </div>

                {/* Center Nav - Hidden on mobile */}
                <Animationview>
                    <div className="hidden md:flex">
                        <ul className="flex gap-6 items-center">
                            <Link to='/'><NavItem label="Home" /></Link>
                            <Link to='/aboutus'><NavItem label="About" /></Link>
                            {/* <NavItem label="Blog" /> */}
                            <Link to="/contactus"><NavItem label="Contact" /></Link>
                        </ul>
                    </div>
                </Animationview>

                {/* Right: Search & Hamburger on Mobile */}
                <Animationview>
                    <div className="flex items-center gap-4 md:gap-2">
                        <div className="hidden md:flex items-center gap-2">
                            <CiSearch size={20} />
                            <h1 className="underline cursor-pointer">Search</h1>
                        </div>
                        <div className="md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)}>
                                {isOpen ? <IoClose size={28} /> : <GiHamburgerMenu size={24} />}
                            </button>
                        </div>
                    </div>
                </Animationview>
            </div>

            {/* Mobile Menu - Slide from Left */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '-100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '-100%', opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="md:hidden fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg z-50 p-6"
                    >
                        <ul className="flex flex-col gap-6 mt-16">
                            <Link to='/'><NavItem label="Home" onClick={() => setIsOpen(false)} /></Link>
                            <Link to='/aboutus'><NavItem label="About" onClick={() => setIsOpen(false)} /></Link>
                            {/* <NavItem label="Blog" onClick={() => setIsOpen(false)} /> */}
                            <Link to='/contactus'><NavItem label="Contact" onClick={() => setIsOpen(false)} /></Link>
                            <div className="flex items-center gap-2 mt-4">
                                <CiSearch size={20} />
                                <h1 className="underline cursor-pointer">Search</h1>
                            </div>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Navbar;
