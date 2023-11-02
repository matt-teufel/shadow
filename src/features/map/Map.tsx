import {
  GoogleMap,
  MarkerF,
  useJsApiLoader,
  InfoWindowF,
  InfoBox,
} from "@react-google-maps/api";
import { InfoWindow } from "@react-google-maps/api";
import { info } from "console";
import React, { useEffect, useMemo, useState } from "react";
import "./Map.module.css";
import shadowBox from "./shadowBox_20x22.png";
import starfish from "./starfish.png";
import star from "./starfish40.png";
import { useExploreStore, Position } from "../../store/store";

const containerStyle = {
  width: "100%",
  height: "100%",
};
type MarkerProps = {
  pos: Position;
  address: string;
};

type InfoWindowData = {
  id: number;
  address: string;
};

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

  const mapPos = useExploreStore((state) => state.mapPos);
  const setMapPosition = useExploreStore((state) => state.setMapPosition);
  const currentLevel = useExploreStore((state) => state.currentLevel);
  const setCurrentLevel = useExploreStore((state) => state.setCurrentLevel);
  const isMapEnabled = useExploreStore((state) => state.isMapEnabled);
  const setIsMapEnabled = useExploreStore((state) => state.setIsMapEnabled);
  const nextLevel = () => {
    setCurrentLevel(currentLevel + 1);
  };
  useEffect(() => {
    navigator.geolocation.watchPosition(async (pos) => {
      setMapPosition({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      } as Position);
      // setIsMapEnabled(true);
    });
  });
  if (!isMapEnabled) return null;
  return !isLoaded ? (
    <h1>Loading...</h1>
  ) : (
    <>
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
        options={mapOptions}
      >
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
        {/* <InfoBox
          position={new google.maps.LatLng(mapPos.lat, mapPos.lng)}
          boxClass={"info-box"}
        >
          <div className="info-box">hello angel and welcome</div>
        </InfoBox> */}
      </GoogleMap>
    </>
  );
}

// {/* {markers.map(({ address, lat, lng }, ind) => (
//   <div key={ind}>
//   <MarkerF
//     position={{ lat, lng }}
//     icon = {{
//       url: shadowBox,
//       labelOrigin: new google.maps.Point(10, -10),
//     }}
//     label = {{text:address, color:"white"}}
//     onClick={() => {
//       handleMarkerClick(ind, {id : ind, address, lat, lng});
//     }}
//   >
//   </MarkerF>
//   </div>
// ))} */}
// {/* <InfoBox
//   position={{ lat: 35.31555195658608, lng: -120.65380604662631 }}
//   content={"hello world"}
//   ></InfoBox> */}

// {/* <MarkerF position={{ lat: 35.31555195658608, lng: -120.65380604662631 }}
// icon={shadowBox}
//  /> */}
