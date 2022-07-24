<script setup>
import { reactive, ref } from "vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const form = reactive({
  email: "",
  password: "",
  confirm: "",
});

const showPass = ref(false);

const rules = {
  email: { required, email },
  password: { required, minLength: minLength(6) },
  confirm: {
    sameAs: sameAs(form.password),
  },
};

const v$ = useVuelidate(rules, form, { $lazy: true });

const handleSubmit = () => {
  console.log({
    email: form.email,
    password: form.password,
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
      <h2 class="text-900 text-3xl my-1">{{ t("join") }}</h2>
      <p>
        {{ t("hasAccMsg") }}
        <RouterLink to="/login" class="ml-2"> {{ t("signIn") }} </RouterLink>
      </p>
    </div>
    <form
      class="flex flex-column gap-3 mt-5 w-80per mx-auto"
      @submit.prevent="handleSubmit"
    >
      <span class="p-input-icon-left">
        <i class="pi pi-envelope"></i>
        <InputText
          type="email"
          :placeholder="t('email')"
          class="w-full"
          v-model="v$.email.$model"
          :class="{ 'p-invalid': v$.email.$invalid }"
        />
      </span>
      <span class="text-red-400 text-sm mb-2 -mt-2" v-if="v$.email.$invalid">
        {{ t("errors.email") }}
      </span>
      <span class="p-input-icon-left p-input-icon-right">
        <i class="pi pi-lock"></i>
        <i
          class="pi pi-eye cursor-pointer"
          @mousedown="showPass = true"
          @mouseup="showPass = false"
        ></i>
        <InputText
          :type="!showPass ? 'password' : 'text'"
          :placeholder="t('password')"
          class="w-full"
          v-model="v$.password.$model"
          :class="{ 'p-invalid': v$.password.$invalid }"
        />
      </span>
      <span class="text-red-400 text-sm mb-2 -mt-2" v-if="v$.password.$invalid">
        {{ t("errors.length", { length: 6 }) }}
      </span>
      <span class="p-input-icon-left p-input-icon-right">
        <i class="pi pi-lock"></i>
        <i
          class="pi pi-eye cursor-pointer"
          @mousedown="showPass = true"
          @mouseup="showPass = false"
        ></i>
        <InputText
          :type="!showPass ? 'password' : 'text'"
          :placeholder="t('confirmPassword')"
          class="w-full"
          v-model="v$.confirm.$model"
          :class="{ 'p-invalid': v$.confirm.$invalid }"
        />
      </span>
      <span class="text-red-400 text-sm mb-2 -mt-2" v-if="v$.confirm.$invalid">
        {{ t("errors.passwordConfirm") }}
      </span>

      <Button
        class="flex justify-content-center gap-2 align-items-center p-button-lg p-button-raised p-button-success mt-3"
        :disabled="
          !v$.email.$dirty ||
          !v$.password.$dirty ||
          !v$.confirm.$dirty ||
          v$.$invalid
        "
      >
        <i class="pi pi-user-plus"></i>
        <span>{{ t("welcome") }}</span>
      </Button>
    </form>
  </div>
</template>
