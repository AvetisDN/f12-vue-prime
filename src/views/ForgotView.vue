<script setup>
import { reactive } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const form = reactive({
  email: "",
});

const rules = {
  email: { required, email },
};

const v$ = useVuelidate(rules, form, { $lazy: true });

const handleSubmit = () => {
  console.log({
    email: form.email,
  });
};
</script>

<template>
  <div
    class="surface-card p-4 border-round w-full shadow-3 border-1 border-50 lg:w-5 py-6"
  >
    <div class="text-center">
      <RouterLink to="/" class="text-6xl text-primary">
        <i class="pi pi-prime text-6xl"></i>
      </RouterLink>
      <h2 class="text-900 text-3xl my-1">{{ t("forgotPassword") }}</h2>
      <p>{{ t("forgotPasswordMsg") }}</p>
    </div>
    <form
      class="flex flex-column gap-3 mt-5 w-80per mx-auto"
      @submit.prevent="handleSubmit"
    >
      <span class="p-input-icon-left">
        <i class="pi pi-envelope"></i>
        <InputText
          type="email"
          :placeholder="t('password')"
          class="w-full"
          v-model="v$.email.$model"
          :class="{ 'p-invalid': v$.email.$invalid }"
        />
      </span>
      <span class="text-red-400 text-sm mb-2 -mt-2" v-if="v$.email.$invalid">
        {{ t("errors.length", { length: 6 }) }}
      </span>
      <div class="flex align-items-center justify-content-between mb-4">
        <RouterLink to="/login"> {{ t("havePassword") }} </RouterLink>
      </div>
      <Button
        class="flex justify-content-center gap-2 align-items-center p-button-lg p-button-raised p-button-danger"
        :disabled="!v$.email.$dirty || !v$.password.$dirty || v$.$invalid"
      >
        <i class="pi pi-refresh"></i>
        <span>{{ t("resetPassword") }}</span>
      </Button>
    </form>
  </div>
</template>
