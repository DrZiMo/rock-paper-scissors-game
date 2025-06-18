import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface RuleWindowState {
  isOpen: boolean
}

interface RuleWindowActions {
  toggleOpen: () => void
}

type RuleWindowStore = RuleWindowState & RuleWindowActions

export const useRuleWindow = create<
  RuleWindowStore,
  [['zustand/devtools', never]]
>(
  devtools((set) => ({
    isOpen: false,
    toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  }))
)
