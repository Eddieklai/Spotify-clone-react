import React,{useEffect} from "react";
import axios from "axios";
import {useStateProvider} from "../utils/StateProvider";
import { reducerCases} from "../utils/Constants";
import {IoLibrary, IoDiscSharp} from 'react-icons/io5';
import {MdHomeFilled, MdSearch} from "react-icons/md";

import styled from "styled-components";

export default function Playlist() {
    const [{ token, playlists }, dispatch] = useStateProvider();
    useEffect(() => {
        const getPlaylistData = async () => {
            const response = await axios.get(
                'https://api.spotify.com/v1/me/playlists',
                {
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "application/json",
                    },
                }
            );
            const { items } = response.data;
            const playlists = items.map(({name, id}) => {
                return {name, id};
            })
            dispatch({type: reducerCases.SET_PLAYLISTS, playlists});
        }
        getPlaylistData();
    }, [token, dispatch]);
    return (
        <Container>
            <ul>
                {playlists.map(({name, id}) => {
                    return <li key={id}><IoDiscSharp />{name}</li>;
                })}
                {playlists.map(({name, id}) => {
                    return <li key={id}><IoDiscSharp />{name}</li>;
                })}
                {playlists.map(({name, id}) => {
                    return <li key={id}><IoDiscSharp />{name}</li>;
                })}
                {playlists.map(({name, id}) => {
                    return <li key={id}><IoDiscSharp />{name}</li>;
                })}
                {playlists.map(({name, id}) => {
                    return <li key={id}><IoDiscSharp />{name}</li>;
                })}
                {playlists.map(({name, id}) => {
                    return <li key={id}><IoDiscSharp />{name}</li>;
                })}
                {playlists.map(({name, id}) => {
                    return <li key={id}><IoDiscSharp />{name}</li>;
                })}
            </ul>
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    overflow: hidden;
    ul {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        height: 50vh;
        max-height: 100%;
        overflow: auto;
        &::-webkit-scrollbar {
            width: 0.3rem;
            &-thumb {
                background-color: rgba(255, 255, 255, 0.5);
            }
        }
        li {
            display: flex;
            gap: 1rem;
            cursor: pointer;
            transition: 0.2s ease-in-out;
            &:hover {
                color: white;
                transform: scale(1.1) translateX(1rem);
            }
        }
    }
`;