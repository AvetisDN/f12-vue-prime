import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: null,
    jwt: "",
  }),
  actions: {
    setUser(user) {
      this.user = user;
    },
    setJwt(jwt) {
      this.jwt = jwt;
    },
    logout() {
      this.user = null;
      this.jwt = "";
      localStorage.removeItem("pvJWT");
    },
  },
});
