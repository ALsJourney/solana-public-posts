import React, {useEffect, useState} from 'react';
import videoBg from "src/assets/he_sold.mp4";
import TypeWriterEffect from "react-typewriter-effect";
import {Button} from "src/components/Button.jsx";
import connectIcon from "src/assets/wallet.svg";
import {useWallet} from "@solana/wallet-adapter-react";
import {useBlog} from "src/context/Blog.jsx";
import {SolflareWalletName} from "@solana/wallet-adapter-wallets";

function FirstDisplay(props) {
    const [connecting, setConnecting] = useState(false)
    const { connected, select } = useWallet()
    const { user, posts, initialized, initUser, createPost, showModal, setShowModal, } = useBlog()
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
                <Button
                    loading={connecting}
                    className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 relative top-4"
                    onClick={onConnect}
                    leftIcon={
                        <img className={"logoicon mr-4"} src={connectIcon} alt="Connect Icon" width={"30px"} height={"20px"}/>
                    }
                >
                    Connect
                </Button>
            </div>
    );
}

export default FirstDisplay;