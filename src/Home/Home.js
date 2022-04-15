import React from 'react';
import HomeBanner from "./HomeBanner";
import HomeJournale from "./HomeJournale";
import Footer from "../Header-Footer/Footer";


function Home(props) {
    return (
        <div className="home">
                <HomeBanner/>
                <HomeJournale/>
        </div>
    );
}

export default Home;