<script setup>
import { onMounted, ref } from "vue";
import { useI18n } from "vue-i18n";

const languages = ref([]);
const { locale, availableLocales } = useI18n();

onMounted(() => {
  const tmp = [];
  availableLocales.forEach((loc) => {
    tmp.push({
      code: loc,
      name: loc.toUpperCase(),
    });
  });
  languages.value = [...tmp];
});

const currentLang = ref(locale.value);
const handleChange = () => {
  locale.value = currentLang.value;
  localStorage.pvLocale = currentLang.value;
};
</script>

<template>
  <div>
    <Dropdown
      :options="languages"
      v-model="currentLang"
      option-label="name"
      option-value="code"
      @change="handleChange"
    />
  </div>
</template>
