import React, { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";
import { useExploreStore } from "../../store/store";
import { Box, Typography } from "@mui/material";
import CircularProgress from "@mui/joy/CircularProgress";
import Lottie from "react-lottie-player";
import animationData from "./checkmark.json";

export function Scanner(props) {
  const [data, setData] = useState("No result");
  const messages = useExploreStore((state) => state.currentLevelMessages);
  const addScannedMessage = useExploreStore((state) => state.addScannedMessage);
  const updateGameState = useExploreStore((state) => state.updateGameState);
  const isScannerEnabled = useExploreStore((state) => state.isScannerEnabled);
  const remainingMessageCount = useExploreStore(
    (state) => state.remainingMessageCount
  );
  const [showCheckmark, setShowCheckmark] = useState(false);
  const scannedMessages = useExploreStore((state) => state.scannedMessages);
  if (!isScannerEnabled) return null;
  return (
    <>
      <QrReader
        onResult={(result, error) => {
          console.log("scanned messages", scannedMessages);
          if (!!result) {
            if (result?.text) {
              console.log("result: ", result.text);
              if (
                messages.includes(result.text) &&
                !scannedMessages.includes(result.text)
              ) {
                addScannedMessage(result.text);
                setShowCheckmark(true);
              }
            }
          }
          if (!!error) {
            console.info(error);
          }
        }}
        constraints={{ facingMode: "environment" }}
        onScan={() => {
          console.log("scan");
        }}
        onError={() => {
          console.log("err");
        }}
        containerStyle={{
          width: "70vh",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          display: "flex",
        }}
        videoStyle={{ "object-fit": "cover" }}
      />

      <Box
        alignItems="center"
        justifyContent="center"
        display={"flex"}
        flexDirection={"column"}
        sx={{
          width: "100vw",
          height: "20vh",
          color: "white",
          bgcolor: "#121212",
          "padding-top": "5px",
        }}>
        <Typography
          display={"block"}
          variant="h6"
          align="center"
          sx={{ "padding-bottom": "15px" }}>
          Reamining QR Codes: {remainingMessageCount}
        </Typography>
        {!showCheckmark && <CircularProgress size="lg" variant="plain" />}
        {showCheckmark && (
          <Lottie
            animationData={animationData}
            play
            loop={false}
            onComplete={() => {
              setShowCheckmark(false);
              updateGameState();
            }}
            style={{
              width: 70,
              height: 70,
            }}
          />
        )}
      </Box>
    </>
  );
}
