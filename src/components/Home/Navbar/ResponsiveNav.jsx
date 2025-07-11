'use client'

import React from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {

  const [showNav, setShowNav] = React.useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <Nav toggleNav={toggleNav} />
      <MobileNav showNav={showNav} toggleNav={toggleNav} />
    </>
  );
}

export default ResponsiveNav;