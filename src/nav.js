import React, { useState } from 'react';
import Logo from './logo.png';

const NavBar = () => {
  const [links, setLinks] = useState([
    { title: "LINKEDIN",
      link: "https://www.linkedin.com/in/rachelrondon/",
      class: "nav-link linkedin-link",
    },
    { title: "GITHUB",
      link: "https://github.com/rachelrondon",
      class: "nav-link github-link",
    }
  ])

  return (
    <nav className="nav">
      <h1 className="nav-logo">Rachel Rondon</h1>
      <ul className="nav-links">
        {links.map((link) => {
          return (
            <li className={link.class}><a target="_blank" href={link.link}>{link.title}</a></li>
          )
        })}
      </ul>
    </nav>
  )
}



export default NavBar;
