import {
  GoogleMap,
  MarkerF,
  useJsApiLoader,
  OverlayView,
} from "@react-google-maps/api";
import React, { useEffect, useMemo, useState } from "react";
import "./Map.module.css";
import userIcon from "./street-view (2).png";
import { useExploreStore, Position } from "../../store/store";
import GameConfig from "../../game-config.json";
import { Box, Typography, Button } from "@mui/material";
import { arePositionsWithinDistance } from "./Map-Utils";
import landmarkIcon from "./destination (1).png";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const messageStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  width: "60vw",
};

const getPixelPositionOffset = (width: number, height: number) => ({
  x: -(width / 2),
  y: -(height / 2),
});

export function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "",
  });

  const mapOptions = {
    disableDefaultUI: true,
    mapId: process.env.REACT_APP_GOOGLE_MAPS_MAP_ID || "",
  };

  const [locationLoaded, setLocationLoaded] = useState(false);
  const mapPos = useExploreStore((state) => state.mapPos);
  const setMapPosition = useExploreStore((state) => state.setMapPosition);
  const currentLevelIndex = useExploreStore((state) => state.currentLevelIndex);
  const isMapEnabled = useExploreStore((state) => state.isMapEnabled);
  const setIsMapEnabled = useExploreStore((state) => state.setIsMapEnabled);
  const setIsScannerEnabled = useExploreStore(
    (state) => state.setIsScannerEnabled
  );
  const [currentLevel, setCurrentLevel] = useState(GameConfig.levels[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // ToDo probably poll this and make there be mutliple hits for truthy
  useEffect(() => {
    setCurrentLevel(GameConfig.levels[currentLevelIndex]);
  }, [currentLevelIndex]);
  useEffect(() => {
    const watchPositionId = navigator.geolocation.watchPosition(
      async (pos) => {
        const newPos = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        } as Position;
        if (newPos.lat !== mapPos.lat || newPos.lng !== mapPos.lng) {
          setMapPosition(newPos);
          setLocationLoaded(true);
          if (arePositionsWithinDistance(newPos, currentLevel.marker.pos, 20)) {
            setIsModalOpen(true);
          }
        }
      },
      null,
      { enableHighAccuracy: true, maximumAge: 5000 }
    );
    // Cleanup function
    return () => {
      // Clear the watchPosition when the component unmounts
      navigator.geolocation.clearWatch(watchPositionId);
    };
  });
  if (!isMapEnabled || !locationLoaded) return null;
  return !isLoaded ? (
    <h1>Loading...</h1>
  ) : (
    <div style={{ height: "100vh", width: "100vw" }}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapPos}
        zoom={15}
        options={mapOptions}>
        <MarkerF
          position={currentLevel.marker.pos}
          icon={{
            url: landmarkIcon,
            labelOrigin: new google.maps.Point(10, -10),
          }}
          label={{ text: currentLevel.marker.address, color: "white" }}
          onClick={() => {
            console.log("clicked");
          }}
        />
        <MarkerF
          position={mapPos}
          icon={{
            url: userIcon,
          }}
        />
        {isModalOpen && (
          <OverlayView
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            position={mapPos}
            getPixelPositionOffset={getPixelPositionOffset}>
            <Box sx={messageStyle}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {currentLevel.modalTitle}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
                {currentLevel.modalDescription}
              </Typography>
              <Button
                variant={"outlined"}
                onClick={() => {
                  setIsMapEnabled(false);
                  setIsScannerEnabled(true);
                  setIsModalOpen(false);
                }}>
                Start Scanning
              </Button>
            </Box>
          </OverlayView>
        )}
      </GoogleMap>
    </div>
  );
}
