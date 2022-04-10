import React from 'react';
import "../Style/Style.css"
import banner from '../Images/Banner.png'
import icon1 from "../Images/icon1.png"
import icon2 from "../Images/icon2.png"
import icon3 from "../Images/icon3.png"

function HomeBanner(props) {
    return (
        <div className="home_banner">
            <div className="home_banner-start">
                <img src={banner} alt='banner'/>
                <div className="home_banner-about">
                    <div className="home_banner-about_text">
                        <p>Ziyo Scientific Center</p>
                    </div>

                    <div className="home_banner-about_paragraph">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, vestibulum euismod nullam elementum. Urna, posuere <br/> nisi sit gravida massa. Ultrices bibendum sagittis pellentesque vitae sit.</p>
                    </div>

                    <div className="home_banner-about_btn">
                        <button>Start a coures</button>
                    </div>
                </div>
            </div>


        </div>

    );
}

export default HomeBanner;