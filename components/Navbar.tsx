import React from 'react';
import ActiveLink from './ActiveLink';
import navStyles from './Navbar.module.css';

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

const Navbar = () => {
  return (
    <nav className={ navStyles.navItems }>
    {
        menuItems.map( items => (
          <ActiveLink key={ items.href } text={ items.text } href={ items.href } />
        ))
    }
      </nav>   
  )
}

export default Navbar;