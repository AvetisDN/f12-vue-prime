<script setup>
import { computed } from "@vue/reactivity";
import axios from "axios";
import { storeToRefs } from "pinia";
import { onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "./stores/auth";
import { useToast } from "primevue/usetoast";

const { user } = storeToRefs(useAuthStore());
const { setUser, setJwt } = useAuthStore();
const route = useRoute();
const router = useRouter();
const layout = computed(() => route.meta.layout);

const toast = useToast();

onMounted(() => {
  if (localStorage.pvJWT && !user.value) {
    const options = {
      method: "GET",
      url: `${import.meta.env.VITE_API_URL}/users/me`,
      headers: {
        Authorization: `Bearer ${localStorage.pvJWT}`,
      },
    };
    axios
      .request(options)
      .then((response) => {
        setUser(response.data);
        setJwt(localStorage.pvJWT);
        if (!route.meta.isPrivate) {
          router.push("/");
        }
      })
      .catch((error) => {
        if (route.meta.isPrivate) {
          router.push("/login");
        }
      });
  }
});
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
  <Toast />
</template>
