<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import AppLayoutDefault from "./AppLayoutDefault.vue";

export default {
  name: "AppLayout",
  data: () => ({
    layout: AppLayoutDefault,
  }),
  watch: {
    $route: {
      immediate: true,
      async handler(route) {
        try {
          const component = await import(`@/layouts/${route.meta.layout}.vue`);
          this.layout = component.default;
        } catch (e) {
          this.layout = AppLayoutDefault;
        }
      },
    },
  },
};
</script>
