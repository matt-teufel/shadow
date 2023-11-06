import {
  GoogleMap,
  MarkerF,
  useJsApiLoader,
  InfoBox,
  OverlayViewF,
  OverlayView,
} from "@react-google-maps/api";
import { info } from "console";
import React, { useEffect, useMemo, useState } from "react";
import "./Map.module.css";
import shadowBox from "./shadowBox_20x22.png";
import starfish from "./starfish.png";
import star from "./starfish40.png";
import { useExploreStore, Position } from "../../store/store";
import GameConfig from "../../game-config.json";
import { Box, Typography, Button } from "@mui/material";
import { arePositionsWithin50Meters } from "./Map-Utils";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const messageStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type MarkerProps = {
  pos: Position;
  address: string;
};

type InfoWindowData = {
  id: number;
  address: string;
};

const getPixelPositionOffset = (width: number, height: number) => ({
  x: -(width / 2),
  y: -(height / 2),
});

export function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDKqJC4dkD_xkdDVOpI38m3nJr3uuRXq7Q",
  });

  const mapOptions = {
    disableDefaultUI: true,
    mapId: "c2191a630a735aa3",
  };

  const [isOpen, setIsOpen] = useState(true);
  const [infoWindowData, setInfoWindowData] = useState<InfoWindowData | null>();
  // const markers: MarkerProps[] = [
  //   {
  //     address: "Architecture Graveyard",
  //     pos: { lat: 35.31555195658608, lng: -120.65380604662631 },
  //   },
  //   {
  //     address: "Bishop's Peak",
  //     pos: { lat: 35.30450168594494, lng: -120.68540687863981 },
  //   },
  //   { address: "Address3", pos: { lat: 18.5642, lng: 73.7769 } },
  // ];
  //pismo markers
  const markers: MarkerProps[] = [
    {
      address: "Architecture Graveyard",
      pos: { lat: 35.1448, lng: -120.641391 },
    },
    {
      address: "Architecture Graveyard",
      pos: { lat: 35.31555195658608, lng: -120.65380604662631 },
    },
    {
      address: "Architecture Graveyard",
      pos: { lat: 35.31555195658608, lng: -120.65380604662631 },
    },
    {
      address: "Architecture Graveyard",
      pos: { lat: 35.31555195658608, lng: -120.65380604662631 },
    },
  ];

  // const handleMarkerClick = (ind: number, {lat, lng, address}: markerProps) => {
  //   // map?.panTo({ lat, lng });
  //   setInfoWindowData({ id:ind, address });
  //   setIsOpen(true);
  // };
  const [locationLoaded, setLocationLoaded] = useState(false);
  const mapPos = useExploreStore((state) => state.mapPos);
  const setMapPosition = useExploreStore((state) => state.setMapPosition);
  const currentLevel = useExploreStore((state) => state.currentLevel);
  const setCurrentLevel = useExploreStore((state) => state.setCurrentLevel);
  const isMapEnabled = useExploreStore((state) => state.isMapEnabled);
  const setIsMapEnabled = useExploreStore((state) => state.setIsMapEnabled);
  const setIsScannerEnabled = useExploreStore(
    (state) => state.setIsScannerEnabled
  );
  const currentLevelPosition = GameConfig.levels[currentLevel].marker.pos;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const nextLevel = () => {
    setCurrentLevel(currentLevel + 1);
  };
  // ToDo probably poll this and make there be mutliple hits for truthy
  useEffect(() => {
    navigator.geolocation.watchPosition(async (pos) => {
      const newPos = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      } as Position;
      setMapPosition(newPos);
      setLocationLoaded(true);
      if (arePositionsWithin50Meters(newPos, mapPos)) {
        setIsModalOpen(true);
      }
    });
  });
  if (!isMapEnabled || !locationLoaded) return null;
  return !isLoaded ? (
    <h1>Loading...</h1>
  ) : (
    <div style={{ height: "100vh", width: "100vw" }}>
      {/* <div id="overlay">
        <div id="modal">
            <span id="close-btn">&times;</span>
            <h2>Your Modal Title</h2>
            <p>Your modal content goes here.</p>
        </div> */}
      {/* </div> */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapPos}
        zoom={15}
        options={mapOptions}>
        <MarkerF
          position={markers[currentLevel].pos}
          icon={{
            url: shadowBox,
            labelOrigin: new google.maps.Point(10, -10),
          }}
          label={{ text: markers[currentLevel].address, color: "white" }}
          onClick={() => {
            console.log("clicked");
          }}
        />
        <MarkerF
          position={mapPos}
          icon={{
            url: star,
          }}
        />
        {isModalOpen && (
          <OverlayView
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            position={mapPos}
            getPixelPositionOffset={getPixelPositionOffset}>
            <Box sx={messageStyle}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Welcome to Architecture Graveyard
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
                I've hidden three QR codes throughout the area. Search high,
                low, and every where in between to unlcok your next location
              </Typography>
              <Button
                variant={"outlined"}
                onClick={() => {
                  setIsMapEnabled(false);
                  setIsScannerEnabled(true);
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
