import { create } from 'zustand';

interface AppState {
  displayMode: 'system' | 'dark' | 'light';
  setDisplayMode: (mode: 'system' | 'dark' | 'light') => void;
}

export const useAppStore = create<AppState>((set) => ({
  displayMode: (localStorage.getItem('displayMode') as any) || 'system',
  setDisplayMode: (mode: 'system' | 'dark' | 'light') => set({ displayMode: mode }), // prettier-ignore
}));
