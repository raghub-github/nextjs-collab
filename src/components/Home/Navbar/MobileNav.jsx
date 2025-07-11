import React from 'react'
import Link from 'next/link'
import { navLinks } from '@/constant/constant'
import { CgClose } from 'react-icons/cg'
import Image from 'next/image'

// const MobileNav = ({ showNav, toggleNav }) => {

//   const navOpen = showNav ? 'translate-x-[0px]' : 'translate-x-[-100%]';

//   return (
//     <div>
//       {/* Overlay for Mobile Navigation (click to close) */}
//       {showNav && (
//         <div
//           onClick={toggleNav}
//           className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-70 z-[9999]"
//         ></div>
//       )}

//       {/* Overlay for Mobile Navigation */}
//       <div className={`fixed top-0 bottom-0 right-0 left-0 bg-black opacity-70 transform transition-all duration-500 h-[100vh] w-full z-[10000] ${navOpen}`}></div>

//       {/* Mobile Navigation Menu */}
//       <div className={`fixed top-[-65px] transform flex transition-all duration-500 text-white justify-center flex-col h-[100vh] z-[100006] delay-300 w-[80%] sm:w-[60%] bg-indigo-900 space-y-6 ${navOpen}`}>
//         <Image src="/images/s1_logo.png" alt="Logo" width={65} height={65} className='lg:pt-1 ml-12 pb-2' />
//         {navLinks.map((link) => {
//           return (
//             <Link key={link.id} href={link.url} onClick={toggleNav}>
//               <p className='nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px]'>{link.label}</p>
//             </Link>
//           );
//         })}
//         {/* close icon */}
//         <CgClose onClick={toggleNav} className="absolute top-[6rem] right-[1.4rem] sm:w-8 sm:h-8 w-7 h-7 text-white" />
//       </div>
//     </div>
//   )
// }

const MobileNav = ({ showNav, toggleNav }) => {
  const navOpen = showNav ? 'translate-x-0' : 'translate-x-[-100%]';

  return (
    <div>
      {/* Overlay for Mobile Navigation (click to close) */}
      {showNav && (
        <div
          onClick={toggleNav}
          className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-70 z-[9999]"
        ></div>
      )}

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed top-0 left-0 z-[10000] transform transition-transform duration-300 flex flex-col h-full w-[80%] sm:w-[60%] bg-indigo-900 space-y-6 text-white ${navOpen}`}
      >
        <div className="flex items-center ml-8 justify-between px-6 pt-6">
          <Image src="/images/s1_logo.png" alt="Logo" width={55} height={55} />
          <CgClose
            onClick={toggleNav}
            className="text-white w-7 h-7 cursor-pointer"
          />
        </div>

        <div className="mt-12 space-y-4 px-5">
          {navLinks.map((link) => (
            <Link key={link.id} href={link.url} onClick={toggleNav}>
              <p className="nav__link text-[20px] ml-10 sm:text-[30px] border-b-[2px] border-white pb-1.5 mt-7">
                {link.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MobileNav;
