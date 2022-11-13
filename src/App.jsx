import {useMemo, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {PhantomWalletAdapter} from "@solana/wallet-adapter-phantom";
import {SolflareWalletAdapter} from "@solana/wallet-adapter-wallets";
import {ConnectionProvider, WalletProvider} from "@solana/wallet-adapter-react";
import {BlogProvider} from "./context/Blog.jsx";
import Router from './../Router';



function App() {

    const endpoint = "https://solana-devnet.g.alchemy.com/v2/sZcWKHEv7RdqXQf5BH5gD6nFgFPAeAhg";

    const wallets = useMemo (
        () => [
            new PhantomWalletAdapter(),
            new SolflareWalletAdapter(),
        ]
    )



  return (
    <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
            <BlogProvider>
                <Router />
            </BlogProvider>
        </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
