import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { useExploreStore } from '../../store/store';

export function Scanner (props){
  const [data, setData] = useState('No result');
  const messages = useExploreStore(state => state.currentLevelMessages);
  const updateMessageStatus = useExploreStore(state => state.updateMessageStatus);
  const updateGameState = useExploreStore(state => state.updateGameState);
  return (
    <>
      <QrReader
        onResult={(result, error) => {
          console.log("messages", messages) 
          if (!!result) {
            if(result?.text && messages[result.text] !== undefined){
              updateMessageStatus(result.text);
              updateGameState();
              console.log("updating messages");
            } 
            console.log(messages);
          }
          if (!!error) {
            console.info(error);
          }
        }}
        containerStyle={{ width: '100%', height: '100%' }}
        onScan={()=>{console.log("scan")}}
        onError={() => {
          console.log("err");
        }   }
      />
    </>
  );
};