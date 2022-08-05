import React, {useEffect, useState} from 'react';
import { useStateProvider } from "./utils/StateProvider";
import {reducerCases} from "./utils/Constants";

import Login from './Components/Login.jsx';
import Spotify from './Components/Spotify.jsx';

import './App.css';

export default function App() {
    const [{ token }, dispatch] = useStateProvider();
    useEffect(() => {
        const hash = window.location.hash;
        if (hash){
            const token = hash.substring(1).split('&')[0].split('=')[1];
            console.log(token);
            dispatch({type:reducerCases.SET_TOKEN, token});
        }
    }, [token, dispatch])
  return (
    <div className="App">
        {token ? <Spotify /> : <Login />}

    </div>
  );
}

