import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import { useExploreStore } from "../../store/store";

export function Scanner(props) {
  const [data, setData] = useState("No result");
  const messages = useExploreStore((state) => state.currentLevelMessages);
  const updateMessageStatus = useExploreStore(
    (state) => state.updateMessageStatus
  );
  const updateGameState = useExploreStore((state) => state.updateGameState);
  const isScannerEnabled = useExploreStore((state) => state.isScannerEnabled);
  if (!isScannerEnabled) return null;
  return (
    <>
      <QrReader
        onResult={(result, error) => {
          console.log("messages", messages);
          if (!!result) {
            if (result?.text && messages[result.text] !== undefined) {
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
        containerStyle={{ width: "100vw", height: "100vh", flex: 1 }}
        facingMode={"environment"}
        onScan={() => {
          console.log("scan");
        }}
        onError={() => {
          console.log("err");
        }}
      />
    </>
  );
}
