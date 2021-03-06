import React from 'react';
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {useParams} from 'react-router-dom'

export default function GamePage() {
    const createId = () => {
      var pin = '';
      for (var i = 0; i < 7; i++){
        const hexString = (Math.random() * 16).toString(16);
        const hexChar = hexString.charAt(0).toUpperCase()
        pin += hexChar
      }
      return pin
    }

    var {gameId} = useParams()
    if (!gameId){
      gameId = createId()
    }

    const joinGame = (gameId) => {
      // 
    }

    const createGame = (gameId) => {
      
    }

    return (
        <div>
            Game id: {gameId}
        </div>
    );
}
