import React, { useState } from 'react';
import Logo from './logo.png';

const NavBar = () => {
  const [links, setLinks] = useState([
    { title: "LINKEDIN",
      link: "https://www.linkedin.com/in/rachelrondon/"
    },
    { title: "GITHUB",
      link: "https://github.com/rachelrondon",
    }
  ])

  return (
    <nav className="nav">
      <p className="nav-logo">Rachel Rondon</p>
      <ul className="nav-links">
        {links.map((link) => {
          return (
            <li className="nav-link"><a target="_blank" href={link.link}>{link.title}</a></li>
          )
        })}
      </ul>
    </nav>
  )
}



export default NavBar;
