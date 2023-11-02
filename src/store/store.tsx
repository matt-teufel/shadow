import { create } from "zustand";

export type Position = {
  lat: number;
  lng: number;
};

type ExploreStoreState = {
  mapPos: Position;
  currentLevel: number;
  isMapEnabled: boolean;
};

type ExploreStoreActions = {
  setMapPosition: (pos: Position) => void;
  setCurrentLevel: (level: number) => void;
  setIsMapEnabled: (isEnabled: boolean) => void;
};

export const useExploreStore = create<ExploreStoreActions & ExploreStoreState>(
  (set) => ({
    mapPos: { lat: 35.30489293472487, lng: -120.66246462042335 },
    setMapPosition: (pos: Position) => {
      set({ mapPos: pos });
      console.log("updating map pos");
    },
    currentLevel: 0,
    setCurrentLevel: (level: number) => {
      set({ currentLevel: level });
    },
    isMapEnabled: false,
    setIsMapEnabled: (isEnabled: boolean) => {
      set({ isMapEnabled: isEnabled });
    },
  }),
);
