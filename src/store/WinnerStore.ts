import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type winnerStoreState = {
  winner: '' | 'player' | 'computer'
  setWinner: (winner: '' | 'player' | 'computer') => void
  resetWinner: () => void
}

export const useWinner = create<winnerStoreState>()(
  devtools((set) => ({
    winner: '',
    setWinner: (winner) => set(() => ({ winner })),
    resetWinner: () => set(() => ({ winner: '' })),
  }))
)
