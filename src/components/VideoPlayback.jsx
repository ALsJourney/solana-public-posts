import React from 'react';
import videoBg from '../assets/he_sold.mp4';
import Footer from "src/components/Footer.jsx";
import {Button} from "src/components/Button.jsx";
import TypeWriterEffect from 'react-typewriter-effect';

function VideoPlayback(props) {
    return (
        <main>
            <div className="overlay"></div>
            <video autoPlay={true} loop={true} muted>
                <source src={videoBg} type="video/mp4"/>
            </video>
            <div className="content">
                <div className="text-2xl font-bold md:text-3xl lg:text-5xl relative p-5">
                <TypeWriterEffect
                    startDelay={100}
                    cursorColor="white"
                    multiText={[
                        "What's on your mind? 🤔",
                        "Share it with the world!🌍️",
                    ]}
                    multiTextDelay={1000}
                    textSpeed={30}
                />
                </div>
                    <p className={"text-xl  md:text-2xl lg:text-3xl"}>Connect your wallet below ⬇️</p>
                <Button className={"m-4"}>Connect Wallet</Button>
            </div>
            <Footer/>
        </main>
    );
}

export default VideoPlayback;