import React from 'react';
import videoBg from '../assets/he_sold.mp4';
import Footer from "src/components/Footer.jsx";
import Typical from 'react-typical';
import {Button} from "src/components/Button.jsx";

function VideoPlayback(props) {
    return (
        <main>
            <div className="overlay"></div>
            <video autoPlay={true} loop={true} muted>
                <source src={videoBg} type="video/mp4"/>
            </video>
            <div className="content">
                <Typical
                    steps={["What's on your mind? 🤔", 500]}
                    loop={Infinity}
                    wrapper="p"
                    className={"text-3xl text-white font-bold"}
                />
                <p className={"text-2xl"}>Connect your wallet and share your thoughts! 💭</p>
                <Button/>
            </div>
            <Footer/>
        </main>
    );
}

export default VideoPlayback;