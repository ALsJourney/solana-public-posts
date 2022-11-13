import React from 'react';
import videoBg from '../assets/he_sold.mp4';
import Footer from "src/components/Footer.jsx";

function VideoPlayback(props) {
    return (
        <main>
            <div className="overlay"></div>
                <video autoPlay={true} loop={true} muted>
                    <source src={videoBg} type="video/mp4"/>
                </video>
                <div className="content">
                    <h1>What's on your mind?</h1>
                    <p>Connect your wallet and post it below.</p>
                </div>
            <Footer/>
        </main>
    );
}

export default VideoPlayback;