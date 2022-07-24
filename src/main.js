import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/vela-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.min.css";
import "./assets/app.css";
import App from "./App.vue";
import router from "./router";
// Layout Components
import LayoutPublic from "./layout/LayoutPublic.vue";
import LayoutPrivate from "./layout/LayoutPrivate.vue";
// Prime Components
import Panel from "primevue/panel";
import MegaMenu from "primevue/megamenu";
import Button from "primevue/button";
import Sidebar from "primevue/sidebar";
import PanelMenu from "primevue/panelmenu";
import InputText from "primevue/inputtext";
import Checkbox from "primevue/checkbox";
import Dropdown from "primevue/dropdown";
import SplitButton from "primevue/splitbutton";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import { createI18n } from "vue-i18n";

import en from "./locales/en";
import ru from "./locales/ru";

const messages = {
  en,
  ru,
};
const i18n = createI18n({
  legacy: false,
  locale: localStorage.pvLocale ? localStorage.pvLocale : "en",
  fallbackLocale: "en",
  messages,
  availableLocales: ["en", "ru"],
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(PrimeVue, { ripple: true });
app.use(ToastService);

app.component("LayoutPublic", LayoutPublic);
app.component("LayoutPrivate", LayoutPrivate);
app.component("Panel", Panel);
app.component("MegaMenu", MegaMenu);
app.component("PanelMenu", PanelMenu);
app.component("Button", Button);
app.component("Sidebar", Sidebar);
app.component("InputText", InputText);
app.component("Checkbox", Checkbox);
app.component("Dropdown", Dropdown);
app.component("SplitButton", SplitButton);
app.component("Toast", Toast);

app.mount("#app");
