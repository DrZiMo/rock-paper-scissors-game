import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type selectedPieceStore = {
  selectedPiece: string
  selected: boolean
  changeSelectedPiece: (piece: string) => void
  toggleSelected: () => void
}

export const useSelectedPiece = create<
  selectedPieceStore,
  [['zustand/devtools', never]]
>(
  devtools((set) => ({
    selectedPiece: '',
    selected: false,
    changeSelectedPiece: (piece: string) =>
      set(() => ({ selectedPiece: piece })),
    toggleSelected: () => set((state) => ({ selected: !state.selected })),
  }))
)
