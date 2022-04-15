import React from 'react';
import facebook from "./../Images/facebook.png"
import ini from "./../Images/in.png"
import insta from "./../Images/insta.png"
import twiter from "./../Images/twiter.png"
import icon_right from "../Images/icon_right.png"
import phone from "../Images/phone.svg"
import email from "../Images/email.svg"
import zemlya from "../Images/zemlya.svg"
import {Link} from "react-router-dom";


function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer_start">
                    <div className="footer_left">
                        <div className="footer_left-top">
                            <h3>Ziyo Scientific Center</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipis. <br/> cing elit Amet vestibulum euismod nullam the <br/> elementum. Urna, posuere nisi sit gravid.</p>
                        </div>
                        <div className="footer_left-bottom">
                            <div className="footer_left-bottom-text">
                                <h3>Biz ijtimoiy tarmoqlarda</h3>
                            </div>
                            <div className="footer_left-bottom_icons">
                               <a href='https://t.me/ziyoscientific_group'>
                               <img src={facebook} alt="icon_facebook"/>
                                <img src={insta} alt="icon_instagram"/>
                                <img src={twiter} alt="icon_twitter"/>
                                <img src={ini} alt="icon_in"/>
                               </a>
                            </div>
                        </div>
                    </div>


                    <div className="footer_right">
                        <div className="footer_right-start">
                            <div className="footer_right-links">
                                <div className="footer_fight-links-text">
                                    <h3>Sahifalar</h3>
                                </div>

                                <div className="footer_right-links_generel">
                                    <div className="footer_right-link_generel">
                                        <img src={icon_right} alt="icon_right"/>
                                        <Link className="footer_links-color" to={"/"}>Bosh Sahifa</Link>
                                    </div>
                                    <div className="footer_right-link_generel">
                                        <img src={icon_right} alt="icon_right"/>
                                        <Link className="footer_links-color" to={"/"}>Jurnallar Haqida</Link>
                                    </div>
                                    <div className="footer_right-link_generel">
                                        <img src={icon_right} alt="icon_right"/>
                                        <Link className="footer_links-color" to={"/"}>Arxiv</Link>
                                    </div>
                                    <div className="footer_right-link_generel">
                                        <img src={icon_right} alt="icon_right"/>
                                        <Link className="footer_links-color" to={"/"}>Tahririyat Azolari</Link>
                                    </div>
                                    <div className="footer_right-link_generel">
                                        <img src={icon_right} alt="icon_right"/>
                                        <Link className="footer_links-color" to={"/"}>Contact</Link>
                                    </div>

                                </div>



                            </div>


                            <div className="footer_right-contact">
                                <div className="footer_right-contact_generel">
                                    <h3>Contact Us</h3>
                                </div>
                                <div className="footer_right-contact_text">
                                    <div className="footer_right-contact_text-block-one">
                                        <p>Xorazm viloyati, Shovot tumani, Qiyot QFY, Qiyot mahallasi,O'zbekiston ko'chasi,30-uy</p>
                                    </div>
                                    <div className="footer_right-contact_text-block-two">
                                        <img src={phone} alt='phone_icon' />
                                        <p className="footer_links-color">+998(99)347-36-05</p>
                                    </div>
                                    <div className="footer_right-contact_text-block-three">
                                        <img src={email} alt='email_icon' />
                                        <p className="footer_links-color">ziyo.scientific@bk.ru</p>
                                    </div>
                                    <div className="footer_right-contact_text-block-four">
                                        <img src={zemlya} alt='zemlya_icon' />
                                        <p className="footer_links-color">research.uz</p>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Footer;