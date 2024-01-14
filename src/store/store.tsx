import { create } from "zustand";
import GameConfig from "../game-config.json";
import { fetchState, updateState } from "./service";
import { AuthUser, getCurrentUser } from "aws-amplify/auth";

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
  user: AuthUser | null;
};

type ExploreStoreActions = {
  setMapPosition: (pos: Position) => void;
  setCurrentLevelIndex: (level: number) => void;
  setIsMapEnabled: (isEnabled: boolean) => void;
  updateGameState: () => void;
  setIsScannerEnabled: (isEnabled: boolean) => void;
  addScannedMessage: (message: string) => void;
  initializeGame: () => void;
};

export const useExploreStore = create<ExploreStoreActions & ExploreStoreState>(
  (set, get) => ({
    mapPos: { lat: 35.30489293472487, lng: -120.66246462042335 },
    setMapPosition: (pos: Position) => {
      set({ mapPos: pos });
      console.log("updating map pos");
    },
    user: null,
    currentLevelIndex: 0,
    currentLevelMessages: GameConfig.levels[0].messages,
    remainingMessageCount: GameConfig.levels[0].messages.length,
    updateGameState: () => {
      if (get().currentLevelMessages.length !== get().scannedMessages.length) {
        return;
      }
      const newLevel = get().currentLevelIndex + 1;
      const username = get().user?.username;
      if (username) {
        updateState(username, newLevel, []);
      }
      if (newLevel >= GameConfig.levels.length) {
        set({ gameOver: true });
      } else {
        get().setCurrentLevelIndex(newLevel);
        set({ isMapEnabled: true, isScannerEnabled: false });
      }
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
      const username = get().user?.username;
      if (username) {
        updateState(username, get().currentLevelIndex, messages);
      }
    },
    initializeGame: async () => {
      const user = await getCurrentUser();
      if (user) {
        const state = await fetchState(user?.username);
        if (state) {
          if (state.level >= GameConfig.levels.length) {
            set({ gameOver: true });
          } else {
            set({
              user: user,
              scannedMessages: state.messages,
              currentLevelIndex: state.level,
              currentLevelMessages: GameConfig.levels[state.level].messages,
              remainingMessageCount:
                GameConfig.levels[state.level].messages.length -
                state.messages.length,
            });
          }
        }
      }
    },
  })
);
