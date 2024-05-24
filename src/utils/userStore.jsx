import { create } from "zustand";

export const youtubeStore = create((set) => ({
    isMenuOpen: true,
    toggleMenu: () => {
        set((state) => ({
            isMenuOpen: !state.isMenuOpen
        }))
    }
}))