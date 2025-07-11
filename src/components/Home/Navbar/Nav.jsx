'use client';

import React, { use, useEffect } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@/constant/constant';
import { HiBars3BottomRight } from 'react-icons/hi2';

const Nav = ({ toggleNav }) => {

    const [navBg, setNavBg] = React.useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 90) {
                setNavBg(true);
            }
            if (window.scrollY < 90) {
                setNavBg(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        // <div className={`fixed ${navBg ? 'bg-indigo-800' : 'fixed'} w-full transition-all duration-200 h-[12vh] z-[1000]`}>
        <div className={`fixed top-0 left-0 right-0 ${navBg ? 'bg-indigo-800' : 'bg-transparent'} w-full transition-all duration-200 h-[10vh] sm:h-[12vh] md:h-[12vh] lg:h-[12vh] xl:h-[12vh] z-[1000]`}>
            <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
                {/* Logo */}
                <Image src="/images/s1_logo.png" alt="Logo" width={45} height={45} className='lg:pt-1' />
                {/* <Image src="/images/logo.png" alt="Logo" width={120} height={120} /> */}
                {/* NavLinks */}
                <div className="hidden lg:flex items-center space-x-10">
                    {navLinks.map((link) => {
                        return (
                            <Link key={link.id} href={link.url}>
                                <p className='nav__link'>{link.label}</p>
                            </Link>
                        );
                    })}
                </div>
                {/* Buttons */}
                <div className="flex items-center space-x-4">
                    <button className="md:px-10 md:py-2 px-8 py-1.5 text-white font-semibold text-base bg-pink-600 hover:bg-pink-800 transition-all duration-200 rounded-lg">
                        Signup Now
                    </button>
                </div>
                {/* Hamburger Icon for Mobile View */}
                <HiBars3BottomRight onClick={toggleNav} className='lg:hidden text-white w-8 h-8 cursor-pointer' />
            </div>
        </div>
    );
};

export default Nav;