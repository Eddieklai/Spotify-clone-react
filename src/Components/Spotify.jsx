import React from 'react';
import styled from "styled-components";

import Sidebar from "./Sidebar.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Body from "./Body.jsx";

export default function Spotify() {
    return (
        <SpotifyContainer>
            <div className={"Spotify_body"}>
                <Sidebar />
                <div className={"body"}>
                    <Navbar />
                    <div className={"body_container"}>
                        <Body />
                    </div>
                </div>
            </div>
            <div className={"spotify_footer"}>
                <Footer />
            </div>
        </SpotifyContainer>
    )
}

const SpotifyContainer = styled.div`
    max-width: 100vw;
    max-height: 100vh;
    overflow: hidden;
    display: grid;
    grid-template-rows: 85vh 15vh;
    .Spotify_body {
        display: grid;
        grid-template-columns: 15vw 85vw;
        height: 100%;
        width: 100%;
        background: linear-gradient(transparent, rgba(0,0,0,0.5));
        background-color: rgb(32, 87, 100);
        .body {
            height: 100%;
            width: 100%;
            overflow: auto;
        }
    }
`;