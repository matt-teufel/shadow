import React from "react";
import { Map } from "./features/map/Map";
import "./App.css";
import WelcomeMessage from "./features/WelcomeMessage";
import { useExploreStore } from "./store/store";
import { Scanner } from "./features/Scanner/Scanner";

function App() {
  const isMapEnabled = useExploreStore((state) => state.isMapEnabled);
  return (
    <div className="App">
      {/* {!isMapEnabled && (
        <div id="welcome-message">
          <WelcomeMessage />
        </div>
      )} */}
      <Map />
      {/* <Scanner /> */}
    </div>
  );
}

export default App;
