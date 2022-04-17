import React from 'react';
import "../../Assets/Style/Style.css"
import banner from '../../Assets/Images/Banner.jpg'



function HomeBanner(props) {
    return (
      <div>
            <div className="home_banner">
            <div className="home_banner-start">
                <img src={banner} alt='banner' className='banner'/>
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
       
            
      </div>
    );
}

export default HomeBanner;