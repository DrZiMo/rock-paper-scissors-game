import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface ComputerStoreState {
  computerSelect: string
  changeComputerSelect: (piece: string) => void
}

export const useComputerSelect = create<ComputerStoreState>()(
  devtools((set) => ({
    computerSelect: '',
    changeComputerSelect: (piece: string) =>
      set(() => ({ computerSelect: piece })),
  }))
)
