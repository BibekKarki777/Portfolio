import React, { useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
      <div className='navbar'>
        <div className='logo'>
            <p>Bibek Karki</p>
        </div>
        <ul className="nav-menu">
            <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#skills'><p onClick={()=>setMenu("skills")}>Skills</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#project'><p onClick={()=>setMenu("project")}>Project</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink></li>
        </ul>
      </div> 
  )
}

export default Navbar