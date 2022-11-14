import React, {useEffect, useState} from 'react';
import {Button} from "src/components/Button.jsx";
import {useWallet} from "@solana/wallet-adapter-react";
import {PhantomWalletName} from "@solana/wallet-adapter-wallets";
import {useBlog} from "src/context/Blog.jsx";
import messageIcon from "../assets/message.svg";
function ConnectedDisplay(props) {
    const [connecting, setConnecting] = useState(false)
    const { connected, select } = useWallet()
    const { user, posts, initialized, initUser, createPost, showModal, setShowModal, } = useBlog()
    const [postTitle, setPostTitle] = useState("")
    const [postContent, setPostContent] = useState("")

    const onConnect = () => {
        setConnecting(true)
        select(PhantomWalletName)
    }

    useEffect(() => {
        if (user) {
            setConnecting(false)
        }
    }, [user])

    return (
        <div className={"flex flex-col items-center align-center"}>
            <h1 className={"text-2xl md:text-4xl"}>Here is your random username. ⬇️</h1>
            <p className=" font-bold text-sm ml-2 capitalize md:text-2xl m-2">
                {user?.name}
            </p>
            {initialized ? (

                <Button
                    className="ml-3 mr-2 mt-2 mb-2 text-lg"
                    onClick={() => {
                        setShowModal(true)
                    }}
                    leftIcon={
                        <img src={messageIcon} alt="message" className="w-4 h-4 mr-4 logoicon" />
                    }
                >
                    Create Post
                </Button>
            ) : (
                <Button
                    className="ml-3 mr-2"
                    onClick={() => {
                        initUser()
                    }}
                >
                    Initialize User
                </Button>
            )}
        </div>
    );
}

export default ConnectedDisplay;