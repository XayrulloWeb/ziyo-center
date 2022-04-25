import React from 'react';
import facebook from "../Assets/Images/facebook.png"
import ini from "../Assets/Images/in.png"
import insta from "../Assets/Images/insta.png"
import twiter from "../Assets/Images/twiter.png"
import icon_right from "../Assets/Images/icon_right.png"
import phone from "../Assets/Images/phone.svg"
import email from "../Assets/Images/email.svg"
import zemlya from "../Assets/Images/zemlya.svg"
import {Link} from "react-router-dom";


function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer_start">
                    <div className="footer_left">
                        <div className="footer_left-top">
                            <h3>Ziyo Scientific Center</h3>
                            <p>
                                Bu qiyin mahorat. U adabiyotlarni o'qish, <br/> nutq so'zlash, odamlar bilan muloqot qilish, <br/> nutq  rivojlantirish mashqlari orqali shakllanadi.</p>
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
                                        <p className="footer_links-color"><a href="tel:+9989993473605">+998(99)347-36-05</a> </p>
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