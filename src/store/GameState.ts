import { create } from 'zustand'

type GameStatusStore = {
  status: 'selecting' | 'result'
  changeStatus: (gameStatus: 'selecting' | 'result') => void
}

export const useGameStatus = create<GameStatusStore>()((set) => ({
  status: 'selecting',
  changeStatus: (gameStatus) => set(() => ({ status: gameStatus })),
}))
