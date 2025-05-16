import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo3.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from 'framer-motion';
import Animationview from '../../lib/AnimationCard';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaBluesky } from "react-icons/fa6";

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
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black z-40"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Mobile Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                            className="fixed top-0 right-0 w-[85%] h-full bg-white z-50 rounded-l-md shadow-2xl flex flex-col justify-between p-6"
                        >
                            {/* Header */}
                            <div className="flex justify-between items-center border-b pb-4 mb-6">
                                <h2 className="text-xl font-bold text-primary">Menu</h2>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-600 hover:text-red-500 transition"
                                >
                                    <IoClose size={28} />
                                </button>
                            </div>

                            {/* Menu Links */}
                            <ul className="flex flex-col gap-6 text-lg font-medium">
                                <motion.li
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <NavItem label="Home" to="/" onClick={() => setIsOpen(false)} />
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <NavItem label="About" to="/aboutus" onClick={() => setIsOpen(false)} />
                                </motion.li>
                                <motion.li
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <NavItem label="Contact" to="/contactus" onClick={() => setIsOpen(false)} />
                                </motion.li>
                            </ul>

                            {/* Footer */}
                            <div className="mt-12 border-t pt-4 text-center text-sm text-gray-400">
                                <p>Follow us</p>
                                <div className="flex justify-center gap-4 mt-2">
                                    <a href="https://www.facebook.com/profile.php?id=61576105015207" className="text-blue-500 transition"><FaFacebookF /></a>
                                    <a href="https://www.instagram.com/alaigram.united/" className="text-pink-500 transition"><FaInstagram /></a>
                                    <a href="https://x.com/alaigram_united" className="text-black transition"><FaXTwitter /></a>
                                    <a href="https://bsky.app/profile/alaigram.bsky.social" className="text-sky-500 transition"><FaBluesky /></a>

                                </div>
                                <p className="mt-6">© 2025 Alaigram</p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>


        </div>
    );
}

export default Navbar;