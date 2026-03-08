import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create()(
  persist(
    (set) => ({
      sessions: [], // Liste des tokens actifs
      currentSession: null,

      loginNewAccount: (newSession) => set((state) => ({
        sessions: [...state.sessions.filter(s => s.user.id !== newSession.user.id), newSession],
        currentSession: newSession
      })),

      switchAccount: (userId) => set((state) => ({
        currentSession: state.sessions.find(s => s.user.id === userId) || state.currentSession
      })),

      logoutAll: () => set({ sessions: [], currentSession: null })
    }),
    { name: 'nzassa-secure-vault' }
  )
);
