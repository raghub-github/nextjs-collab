import React from 'react'
import Link from 'next/link'
import { navLinks } from '@/constant/constant'
import { CgClose } from 'react-icons/cg'

const MobileNav = ({ showNav, toggleNav }) => {

  const navOpen = showNav ? 'translate-x-[0px]' : 'translate-x-[-100%]';

  return (
    <div>
      {/* Overlay for Mobile Navigation */}
      <div className={`fixed top-0 bottom-0 right-0 left-0 bg-black opacity-70 transform transition-all duration-500 h-[100vh] w-full z-[10000] ${navOpen}`}></div>

      {/* Mobile Navigation Menu */}
      <div className={`fixed top-[-20] transform flex transition-all duration-500 text-white justify-center flex-col h-[100vh] z-[100006] delay-300 w-[80%] sm:w-[60%] bg-indigo-900 space-y-6 ${navOpen}`}>
        {navLinks.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              <p className='nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]'>{link.label}</p>
            </Link>
          );
        })}
        {/* close icon */}
        <CgClose onClick={toggleNav} className="absolute top-[3rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white" />
      </div>
    </div>
  )
}

export default MobileNav;
