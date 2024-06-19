import { create } from "zustand";

interface IStore {
  file: null | File;
  nodes: Number[];
  inputFile: (file: File) => void;
}

export const useStore = create<IStore>((set) => ({
  file: null,
  nodes: [],
  inputFile: (file: File) => set((state) => ({ ...state, file })),
  changeNodesArray: (nodes: Number[]) => set((state) => ({ ...state, nodes })),
}));
