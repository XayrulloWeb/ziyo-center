import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "../Assets/Style/Style.css"
import logo from "../Assets/Images/IMG_20220403_222310_225.png"

function Navbar(props) {
    const [toggleMenu, setToogleMenu] = useState(false)

    const toggleNAv = () =>{
        setToogleMenu(!toggleMenu)
    }
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {

        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth)

    }, [])

    // let $ = require('jquery')
    // window.$ = window.jQuery = $
    //     $(".btn_resp").click(function () {
    //         $(".btn_rest span:nth-child(1)").toggleClass('first')
    //         $(".btn_rest span:nth-child(2)").toggleClass('middle')
    //         $(".btn_rest span:nth-child(3)").toggleClass('end')
    //     })
    //

    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar_start">
                    <Link to={"/"} className="navbar_left">
                            <img src={logo} alt="logo" className='logo'/>
                    </Link>

                    <div className="navbar_center">
                        {(toggleMenu || screenWidth > 750) && (
                            <div className="navbar_links">
                                <Link className='navbar_link' to={'/'}>Bosh Sahifa</Link>
                                <Link className='navbar_link' to={'/'}>Umumiy ma'lumotlar</Link>
                                <Link className='navbar_link' to={'/'}>Jurnallar haqida</Link>
                                <Link className='navbar_link' to={'/arxiv'}>Arxiv</Link>
                                <Link className='navbar_link' to={'/members'}>Tahririyat a'zolari</Link>
                                <Link className='navbar_link' to={'/'}>Interaktiv xizmatlar</Link>
                            </div>
                        )}
                            <div className="btn_responsive">
                                <div onClick={toggleNAv}  className="btn_resp">
                                    <span className="first"></span>
                                    <span className="middle"></span>
                                    <span className="end"></span>
                                </div>

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



        </div>
        
    );
}

