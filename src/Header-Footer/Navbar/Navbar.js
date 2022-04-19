import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/Images/logo.png"
import {Link} from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
        <Link className="navabr_link-re" to={"/"}>
            <img src={logo} className="nav-logo"/>

        </Link>

          <div className={`nav-items ${isOpen && "open"}`}>

              <Link className='links' to={'/'}>Bosh Sahifa</Link>
              <Link className='links' to={'/'}>Umumiy ma'lumotlar</Link>
              <Link className='links' to={'/'}>Jurnallar haqida</Link>
              <Link className='links' to={'/arxiv'}>Arxiv</Link>
              <Link className='links' to={'/members'}>Tahririyat a'zolari</Link>
              <Link className='links' to={'/contact'}>A'loqa</Link>
              <Link className='links' to={'/'}>Interaktiv xizmatlar</Link>
            <div className="title">

        </div>
   
      </div>
     
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
      
    </div>
  );
};

export default Navbar;
