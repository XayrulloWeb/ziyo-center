import React from 'react';
import {Link} from "react-router-dom";
import "../Style/Style.css"
import logo from "../Images/IMG_20220403_222310_225.png"

function Navbar(props) {
    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar_start">
                    <Link to={"/"} className="navbar_left">
                            <img src={logo} alt="logo"/>
                    </Link>

                    <div className="navbar_center">
                        <div className="navbar_links">
                            <Link className='navbar_link' to={'/'}>Bosh Sahifa</Link>
                            <Link className='navbar_link' to={'/'}>Jurnallar Xaqida</Link>
                            <Link className='navbar_link' to={'/arxiv'}>Arxiv</Link>
                            <Link className='navbar_link' to={'/members'}>Taxriyat Azo'lari</Link>
                            <Link className='navbar_link' to={'/contact'}>Contact</Link>
                        </div>
                    </div>

                    <div className="navbar_right">
                        <div className="navbar_btns">
                            <button className="navbar_btn-one">Sing in</button>
                            <button className="navbar_btn-two">Sing Up</button>
                        </div>
                    </div>
                </div>
            </div>

        {/*   <div id="mySidenav" class="sidenav">*/}
        {/*    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>*/}
        {/*    <a href="#">About</a>*/}
        {/*    <a href="#">Services</a>*/}
        {/*    <a href="#">Clients</a>*/}
        {/*    <a href="#">Contact</a>*/}
        {/*</div>*/}


    {/*<span onClick="openNav()">&#9776; </span>*/}

        </div>
    );
}

export default Navbar;