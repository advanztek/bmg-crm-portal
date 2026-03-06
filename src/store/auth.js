import { create } from "zustand";
import { persist } from "zustand/middleware";

/**
 * @typedef {Record<string, any>} User
 */

/**
 * @typedef {Object} AuthState
 * @property {User|null} user - The currently authenticated user
 * @property {string|null} token - The authentication token
 * @property {function({ user: User, token: string }): void} setAuth - Sets the authenticated user and token
 * @property {function(): void} clearAuth - Clears the authenticated user and token
 */

/** @type {import('zustand').StoreApi<AuthState>} */
export const useAuthStore = create(
  persist(
    (set) => ({
      /** @type {User|null} */
      user: null,

      /** @type {string|null} */
      token: null,

      /** @param {{ user: User, token: string }} auth */
      setAuth: ({ user, token }) =>
        set({
          user,
          token,
        }),

      clearAuth: () =>
        set({
          user: null,
          token: null,
        }),
    }),
    {
      name: "bmg_auth_user",
    },
  ),
);
