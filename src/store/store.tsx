import { create } from "zustand";
import GameConfig from "../game-config.json";

export type Position = {
  lat: number;
  lng: number;
};

type ExploreStoreState = {
  mapPos: Position;
  currentLevel: number;
  isMapEnabled: boolean;
  currentLevelMessages: Record<string, boolean>;
  isScannerEnabled: boolean;
};

type ExploreStoreActions = {
  setMapPosition: (pos: Position) => void;
  setCurrentLevel: (level: number) => void;
  setIsMapEnabled: (isEnabled: boolean) => void;
  updateMessageStatus: (message: string) => void;
  updateGameState: () => void;
  setIsScannerEnabled: (isEnabled: boolean) => void;
};

export const useExploreStore = create<ExploreStoreActions & ExploreStoreState>(
  (set, get) => ({
    mapPos: { lat: 35.30489293472487, lng: -120.66246462042335 },
    setMapPosition: (pos: Position) => {
      set({ mapPos: pos });
      console.log("updating map pos");
    },
    currentLevel: 0,
    currentLevelMessages: GameConfig.levels[0].messages,
    updateGameState: () => {
      Object.values(get().currentLevelMessages).forEach((value) => {
        if (!value) {
          return;
        }
      });
      get().setCurrentLevel(get().currentLevel + 1);
    },
    setCurrentLevel: (level: number) => {
      set({
        currentLevel: level,
        currentLevelMessages: GameConfig.levels[level].messages,
      });
    },
    updateMessageStatus: (message: string) => {
      const currentMessages = get().currentLevelMessages;
      currentMessages[message] = true;
      set({ currentLevelMessages: currentMessages });
    },
    isMapEnabled: false,
    setIsMapEnabled: (isEnabled: boolean) => {
      set({ isMapEnabled: isEnabled });
    },
    isScannerEnabled: false,
    setIsScannerEnabled: (isEnabled: boolean) => {
      set({ isScannerEnabled: isEnabled });
    },
  })
);
