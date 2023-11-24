import { create } from "zustand";
import GameConfig from "../game-config.json";

export type Position = {
  lat: number;
  lng: number;
};

type ExploreStoreState = {
  mapPos: Position;
  currentLevelIndex: number;
  isMapEnabled: boolean;
  currentLevelMessages: string[];
  scannedMessages: string[];
  isScannerEnabled: boolean;
  remainingMessageCount: number;
  gameOver: boolean;
};

type ExploreStoreActions = {
  setMapPosition: (pos: Position) => void;
  setCurrentLevelIndex: (level: number) => void;
  setIsMapEnabled: (isEnabled: boolean) => void;
  updateGameState: () => void;
  setIsScannerEnabled: (isEnabled: boolean) => void;
  addScannedMessage: (message: string) => void;
};

export const useExploreStore = create<ExploreStoreActions & ExploreStoreState>(
  (set, get) => ({
    mapPos: { lat: 35.30489293472487, lng: -120.66246462042335 },
    setMapPosition: (pos: Position) => {
      set({ mapPos: pos });
      console.log("updating map pos");
    },
    currentLevelIndex: 0,
    currentLevelMessages: GameConfig.levels[0].messages,
    remainingMessageCount: GameConfig.levels[0].messages.length,
    updateGameState: () => {
      if (get().currentLevelMessages.length !== get().scannedMessages.length) {
        return;
      }
      console.log("incrementing game level");
      const newLevel = get().currentLevelIndex + 1;
      if (newLevel === GameConfig.levels.length) {
        set({ gameOver: true });
      } else {
        get().setCurrentLevelIndex(newLevel);
        set({ isMapEnabled: true, isScannerEnabled: false });
      }

      // set({
      //   currentLevel: newLevel,
      //   currentLevelMessages: GameConfig.levels[newLevel].messages,
      //   isMapEnabled: true,
      //   isScannerEnabled: false,
      // });
    },
    setCurrentLevelIndex: (level: number) => {
      set({
        currentLevelIndex: level,
        currentLevelMessages: GameConfig.levels[level].messages,
        scannedMessages: [],
        remainingMessageCount: GameConfig.levels[level].messages.length,
      });
    },
    isMapEnabled: false,
    setIsMapEnabled: (isEnabled: boolean) => {
      set({ isMapEnabled: isEnabled });
    },
    isScannerEnabled: false,
    setIsScannerEnabled: (isEnabled: boolean) => {
      set({ isScannerEnabled: isEnabled });
    },
    gameOver: false,
    scannedMessages: [],
    addScannedMessage: (message: string) => {
      const messages = get().scannedMessages;
      messages.push(message);
      const remainingCount = get().remainingMessageCount - 1;
      set({ scannedMessages: messages, remainingMessageCount: remainingCount });
    },
  })
);
