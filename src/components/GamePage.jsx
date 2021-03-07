import React, {useEffect, useState} from 'react';
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {useParams} from 'react-router-dom'
import {useHistory} from 'react-router'
import firebase from './firebase'
import { SignalCellularNull } from '@material-ui/icons';

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

    const [gameId, setGameId] = useState(useParams()['gameId'])
    const [gameDocTest, setGameDocTest] = useState(null)
    const [error, setError] = useState(false)
    const [host, setHost] = useState(false)
    const history = useHistory()

    const [data, setData] = useState({host: false, gameId: useParams()['gameId'], gameDocTest: null })

    useEffect(async () => {

      if (data.gameId) {
        const gameDocQuery = await firebase.firestore().collection('gameSessions').where('pin', '==', gameId).get()
        console.log(gameDocQuery)
        if (gameDocQuery.empty){
          setError(true)
          console.log('invalid game pin')
        }
        
        else{
          const gameDoc = gameDocQuery.docs[0]
          const newParticipantDocRef = gameDoc.ref.collection('participants').doc()
          const newParticipantPromise = newParticipantDocRef.set({'cards': {}, 'name': 'new Participant promise', 'score': 0})
          let gameDocUpdatePromise;
          if (!gameDoc.data().host){
            gameDocUpdatePromise = gameDoc.ref.update({'host': {'name': 'Reza No Host', 'id': newParticipantDocRef.id}, 'participants': firebase.firestore.FieldValue.arrayUnion({'id': newParticipantDocRef.id, 'name': 'Reza No Host'})})
          }
          else{
            gameDocUpdatePromise = gameDoc.ref.update({'participants': firebase.firestore.FieldValue.arrayUnion({'id': newParticipantDocRef.id, 'name': 'Reza Host Participant'})})
          }
          await Promise.all([newParticipantPromise, gameDocUpdatePromise])
          console.log('Joined game!')
        }
      }
      else{
        const gameDocRef = firebase.firestore().collection('gameSessions').doc()
        const newId = createId()
        await gameDocRef.set({'participants': {}, 'pin': newId, 'gameStarted': false, 'round': 0})
        history.replace('/game/' + newId)
        setData({host: true, gameId: newId, gameDocTest: gameDocRef })
        // setHost(true)
        // setGameId(newId)
        
      }
    }, [gameId])

    
    useEffect(() => {
      return async () => {
        console.log("unmounting")
        await data.gameDocRef.delete();
      }
    }, [])


    return (
        data.host ? 
        <div>
            You are the host! Game id: {data.gameId}
        </div> :
        <div>
          You joined the game! Game id: {data.gameId}
        </div>
    );
}
