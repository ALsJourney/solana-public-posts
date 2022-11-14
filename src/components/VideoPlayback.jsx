import React, {useEffect, useState} from 'react';
import videoBg from '../assets/he_sold.mp4';
import Footer from "src/components/Footer.jsx";
import {Button} from "src/components/Button.jsx";
import TypeWriterEffect from 'react-typewriter-effect';
import {ConnectionProvider, useWallet} from "@solana/wallet-adapter-react";
import {PhantomWalletName, SolflareWalletName} from "@solana/wallet-adapter-wallets";
import {useBlog} from "src/context/Blog.jsx";
import connectIcon from "../assets/wallet.svg";
import FirstDisplay from "src/components/FirstDisplay.jsx";
import ConnectedDisplay from "src/components/ConnectedDisplay.jsx";
import PostList from "src/components/PostList.jsx";

function VideoPlayback(props) {
    const [connecting, setConnecting] = useState(false)
    const {connected, select} = useWallet()
    const {user, posts, initialized, initUser, createPost, showModal, setShowModal,} = useBlog()
    const [postTitle, setPostTitle] = useState("")
    const [postContent, setPostContent] = useState("")


    const onConnect = () => {
        setConnecting(true)
        select(SolflareWalletName)
    }

    useEffect(() => {
        if (user) {
            setConnecting(false)
        }
    }, [user])


    return (
        <main>
            <div className="overlay"></div>
            <video autoPlay={true} loop={true} muted>
                <source src={videoBg} type="video/mp4"/>
            </video>
            {connected ? (
                <div className={"content"}>
                    <ConnectedDisplay/>
                    <PostList/>
                </div>
            ) : (
                <FirstDisplay/>
            )}
            <Footer/>
        </main>
    );
}

export default VideoPlayback;