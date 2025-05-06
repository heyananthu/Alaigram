import React, { useState } from 'react';
import Logo from '../../assets/Logo3.png';
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from 'framer-motion';
import Animationview from '../../lib/AnimationCard'
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
        <div className="w-full px-4 py-3 bg-white border-b-2">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between h-16">

                {/* Left: Logo */}
                <div className="flex-shrink-0">
                    <img src={Logo} alt="Logo" className="h-32 w-36 object-contain " />
                </div>
                {/* Center Nav - Hidden on mobile */}
                <Animationview>
                    <div className="hidden md:flex">
                        <ul className="flex gap-6 items-center">
                            <Link to='/'> <NavItem label="Home" /> </Link>
                            <Link to='/aboutus' >  <NavItem label="About" /></Link>
                            <NavItem label="Blog" />
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

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-hidden"
                    >
                        <ul className="flex flex-col items-center gap-4 bg-white rounded-lg p-4">
                            <NavItem label="Home" onClick={() => setIsOpen(false)} />
                            <NavItem label="About" onClick={() => setIsOpen(false)} />
                            <NavItem label="Blog" onClick={() => setIsOpen(false)} />
                            <NavItem label="Contact" onClick={() => setIsOpen(false)} />
                            <div className="flex items-center gap-2 mt-2">
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
