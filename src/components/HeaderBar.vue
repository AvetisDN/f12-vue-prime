<script setup>
import { ref, watch } from "vue";
import megaMenuItems from "../assets/menu";
import panelMenuItems from "../assets/menuPanel";
import { useRoute, useRouter } from "vue-router";

const expandedKeys = ref({});
const menuItems = ref(megaMenuItems);
const menuPanelItems = ref(panelMenuItems);
const overlayVisible = ref(false);

const route = useRoute();
const router = useRouter();
watch(
  () => route.fullPath,
  () => {
    if (route.fullPath.indexOf("/blog") !== -1) {
      expandedKeys.value = { 1: true };
    } else {
      expandedKeys.value[1] = false;
    }
  }
);
</script>

<template>
  <div>
    <MegaMenu
      :model="menuItems"
      class="flex align-items-center gap-3 p-3 header h-4rem"
    >
      <template #start>
        <RouterLink to="/" class="bg-transparent text-primary">
          <i class="pi pi-prime text-3xl"></i>
        </RouterLink>
      </template>
      <template #end>
        <div class="flex gap-3 align-content-center">
          <Button
            class="p-button-rounded p-button-text lg:hidden"
            icon="pi pi-bars"
            @click="overlayVisible = true"
          />
          <Button
            class="p-button-rounded"
            icon="pi pi-user"
            @click="router.push('/login')"
          />
        </div>
      </template>
    </MegaMenu>
    <Sidebar v-model:visible="overlayVisible">
      <PanelMenu :model="menuPanelItems" v-model:expandedKeys="expandedKeys" />
    </Sidebar>
  </div>
</template>
