import React, {useEffect, useState} from 'react';
import {useWallet} from "@solana/wallet-adapter-react";
import {useBlog} from "src/context/Blog.jsx";
import {PostForm} from "src/components/PostForm.jsx";

function PostList(props) {
    const [connecting, setConnecting] = useState(false)
    const {connected, select} = useWallet()
    const {user, posts, initialized, initUser, createPost, showModal, setShowModal,} = useBlog()
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
        <div className="all__posts">
            {posts.map((item) => {
                return (
                    <div className="pt-3">
                        {/* <h1 className="title">The Blog</h1> */}
                        <div className="row">
                            <article className="post__card-2"
                                     onClick={() => {
                                         history.push(`/read-post/${item.publicKey.toString()}`)
                                     }}
                                     key={item.account.id}
                            >
                                <div className="post__card_-2">
                                    <div
                                        className="post__card__image-2"
                                        style={{
                                            backgroundImage: `url("https://user-images.githubusercontent.com/62637513/184338539-9cdbdc58-1e72-4c48-8203-0b7ec23d3eb0.png")`,
                                        }}
                                    ></div>
                                    <div>
                                        <div className="post__card_meta-2">
                                            <p className="post__card_alttitle-2">
                                                {item.account.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                )
            })}
            <div className={`modal ${showModal && 'show-modal'}`}>
                <div className="modal-content">
            <span className="close-button"
                  onClick={() => setShowModal(false)}
            >×</span>
                    <PostForm
                        postTitle={postTitle}
                        postContent={postContent}
                        setPostTitle={setPostTitle}
                        setPostContent={setPostContent}
                        onSubmit={() => createPost(postTitle, postContent)}
                    />
                </div>
            </div>
        </div>

    );
}

export default PostList;