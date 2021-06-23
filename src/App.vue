<template>
  <AppLayout />
</template>

<script>
import { watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import AppLayout from "@/layouts/AppLayout";
import { TOKEN } from "@/store/state";
import { GET_USER } from "@/store/actions";

export default {
  name: "App",
  components: {
    AppLayout,
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    watch(
      () => route.name,
      (value) => {
        if (value === "Home" && store.state[TOKEN]) {
          store.dispatch(GET_USER);
        }
      }
    );
  },
};
</script>
