import { create } from 'zustand'

const useStore = create((set) => ({
  retreats: [],
  setRetreats: (retreat) => set({ retreats: retreat }),
}))

export default useStore;
