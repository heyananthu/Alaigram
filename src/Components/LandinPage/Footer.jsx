import React from 'react'
import Logo from '../../assets/Logo3.png'
import { Link } from 'react-router-dom'
import { FaBluesky } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
    return (
        <footer className="footer footer-horizontal footer-center  text-base-content rounded p-10 ">
            <nav className="grid grid-flow-col gap-4">
                <Link to='/aboutus' className="link link-hover">About us</Link>
                <Link to='/contactus' className="link link-hover">Contact</Link>
                <Link to='/books' className="link link-hover">Books</Link>
                <Link to='/' className="link link-hover">New products</Link>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a className='cursor-pointer' href='https://x.com/alaigram_united' >
                        <FaXTwitter size={26} />
                    </a>
                    <a className='cursor-pointer' href='https://www.instagram.com/alaigram.united/'>
                        <FaInstagramSquare size={26} />
                    </a>
                    <a className='cursor-pointer' href='https://www.facebook.com/profile.php?id=61576105015207'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </a>
                    <a className='cursor-pointer' href='https://bsky.app/profile/alaigram.bsky.social'><FaBluesky size={26} /></a>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Alaigram United</p>
            </aside>
        </footer>
    )
}

export default Footer
