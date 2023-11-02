import React from "react";
import { Map } from "./features/map/Map";
import "./App.css";
import WelcomeMessage from "./features/WelcomeMessage";
import { useExploreStore } from "./store/store";

function App() {
  const isMapEnabled = useExploreStore((state) => state.isMapEnabled);
  return (
    <div className="App">
      {!isMapEnabled && (
        <div id="welcome-message">
          <WelcomeMessage />
        </div>
      )}
      <Map />
    </div>
  );
}

export default App;
