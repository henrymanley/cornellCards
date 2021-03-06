import React from 'react';
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {useParams} from 'react-router-dom'
import {useHistory} from 'react-router'
import firebase from './firebase'

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

    const createGame = async (gameId) => {
      const gameDocRef = firebase.firestore().collection('gameSessions').doc()
      const hostParticipantRef = gameDocRef.collection('participants').doc()
      await gameDocRef.set({'host': {'name': 'Reza', 'id': hostParticipantRef.id}, 'participants': {}, 'pin': gameId})
      await hostParticipantRef.set({'cards': {}, 'name': 'Reza', 'score': 0})
    }

    const joinGame = async (gameId) => {
      const gameDocQuery = await firebase.firestore().collection('gameSessions').where('pin', '==', gameId).get()
      console.log(gameDocQuery)
      if (gameDocQuery.empty){
        console.log('invalid game pin')
      }
      else{
        const gameDoc = gameDocQuery.docs[0]
        const newParticipantDocRef = gameDoc.ref.collection('participants').doc()
        await newParticipantDocRef.set({'cards': {}, 'name': 'Henry', 'score': 0})
        await gameDoc.ref.update({'participants': firebase.firestore.FieldValue.arrayUnion({'id': newParticipantDocRef.id, 'name': 'Henry'})})
        console.log('Joined game! Host: ' + gameDoc.data().host.name)
      }
    }

    const history = useHistory();
    var {gameId} = useParams()
    if (!gameId){
      gameId = createId()
      createGame(gameId)
      history.replace('/game/' + gameId)
    }
    else{
      joinGame(gameId)
    }

    

    

    return (
        <div>
            Game id: {gameId}
        </div>
    );
}
