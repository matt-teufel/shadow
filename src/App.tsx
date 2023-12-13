import React, { useEffect } from "react";
import { Map } from "./features/map/Map";
import "./App.css";
import WelcomeMessage from "./features/WelcomeMessage";
import { useExploreStore } from "./store/store";
import { Scanner } from "./features/Scanner/Scanner";
import { GameOver } from "./features/gameover/GameOver";
import { QrReader } from "react-qr-reader";
import { Amplify } from "aws-amplify";
import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import config from "./amplifyconfiguration.json";
Amplify.configure(config);

export function App({ signOut, user }: WithAuthenticatorProps) {
  const isMapEnabled = useExploreStore((state) => state.isMapEnabled);
  const setIsMapEnabled = useExploreStore((state) => state.setIsMapEnabled);
  const isScannerEnabled = useExploreStore((state) => state.isScannerEnabled);
  const setIsScannerEnabled = useExploreStore(
    (state) => state.setIsScannerEnabled
  );
  const gameOver = useExploreStore((state) => state.gameOver);
  useEffect(() => {
    // setIsScannerEnabled(true);
    setIsMapEnabled(true);
  }, []);
  return (
    <div className="App">
      {!gameOver ? (
        <>
          {!isMapEnabled && !isScannerEnabled && (
            <div id="welcome-message">
              <WelcomeMessage />
            </div>
          )}
          <Scanner />
          <Map />
        </>
      ) : (
        <GameOver />
      )}
    </div>
  );
}

export default withAuthenticator(App);
