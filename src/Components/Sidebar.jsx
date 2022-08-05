import React from 'react';
import styled from "styled-components";
import {IoLibrary} from 'react-icons/io5';
import {MdHomeFilled, MdSearch} from "react-icons/md";

import Playlist from './Playlist.jsx';

export default function Sidebar() {
    return (
        <Container>
            <div className={"top_links"}>
                <div className={"logo"}>
                    <img src={"https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png"} alt={"Spotify"} />
                </div>
                <ul>
                    <li>
                        <MdHomeFilled />
                        <span>home</span>
                    </li>
                    <li>
                        <MdSearch />
                        <span>search</span>
                    </li>
                    <li>
                        <IoLibrary />
                        <span>your library</span>
                    </li>
                </ul>
            </div>
            <Playlist />
        </Container>
    )
}

const Container = styled.div`
    background-color: black;
    color: #b3b3b3;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    .top_links {
        display: flex;
        flex-direction: column;
        .logo {
            text-align: center;
            margin: 1rem 0;
            img {
                max-inline-size: 60%;
                block-size: auto;
            }
        }
        ul {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
            li {
                display: flex;
                gap: 1rem;
                cursor: pointer;
                transition: 0.3s ease-in-out;
                &:hover {
                    color: white;
                }
            }
        }
    }
`;