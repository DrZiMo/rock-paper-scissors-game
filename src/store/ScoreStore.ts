import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

type scoreStoreState = {
  score: number
  increaseScore: () => void
  resetScore: () => void
}

export const useScore = create<scoreStoreState, [['zustand/devtools', never]]>(
  devtools((set) => ({
    score: 0,
    increaseScore: () => set((state) => ({ score: state.score + 1 })),
    resetScore: () => set(() => ({ score: 0 })),
  }))
)
