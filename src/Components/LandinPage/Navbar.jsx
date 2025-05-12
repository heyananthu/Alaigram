import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo3.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from 'framer-motion';
import Animationview from '../../lib/AnimationCard';

// Reusable NavItem
const NavItem = ({ label, to, onClick }) => (
    <li
        onClick={onClick}
        className="relative cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
    >
        <Link to={to} className="px-3 py-2 inline-block">{label}</Link>
    </li>
);

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full px-4 py-3 bg-white border-b-2 relative z-50">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between h-16">

                {/* Logo on the left */}
                <div className="flex-shrink-0">
                    <Link to="/" onClick={() => setIsOpen(false)}>
                        <img src={Logo} alt="Logo" className="h-32 w-36 object-contain" />
                    </Link>
                </div>

                {/* Menu + Hamburger on the right */}
                <div className="flex items-center gap-6">
                    {/* Desktop Menu */}
                    <Animationview>
                        <nav className="hidden md:flex">
                            <ul className="flex gap-6 items-center">
                                <NavItem label="Home" to="/" onClick={() => setIsOpen(false)} />
                                <NavItem label="About" to="/aboutus" onClick={() => setIsOpen(false)} />
                                <NavItem label="Contact" to="/contactus" onClick={() => setIsOpen(false)} />
                            </ul>
                        </nav>
                    </Animationview>

                    {/* Hamburger Icon for Mobile */}
                    <Animationview>
                        <div className="md:hidden">
                            <button onClick={() => setIsOpen(!isOpen)}>
                                {isOpen ? <IoClose size={28} /> : <GiHamburgerMenu size={24} />}
                            </button>
                        </div>
                    </Animationview>
                </div>

            </div>

            {/* Mobile Menu */}
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
                            <NavItem label="Home" to="/" onClick={() => setIsOpen(false)} />
                            <NavItem label="About" to="/aboutus" onClick={() => setIsOpen(false)} />
                            <NavItem label="Contact" to="/contactus" onClick={() => setIsOpen(false)} />
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default Navbar;