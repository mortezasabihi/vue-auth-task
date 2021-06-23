<template>
  <div
    class="
      navbar
      mb-2
      shadow-lg
      bg-neutral
      text-neutral-content
      rounded-box
      sticky
      top-0
    "
  >
    <div class="flex-1 px-2 mx-2 lg:flex">
      <h1 class="text-lg font-bold">Brand</h1>
    </div>

    <template v-if="user">
      <!-- logged in -->
      <div class="flex-none">
        <div class="avatar items-center">
          <div class="rounded-full w-10 h-10 m-1">
            <img src="https://i.pravatar.cc/500?img=32" />
          </div>
          <span>{{ user.phone }}</span>
        </div>
      </div>
      <!-- /logged in -->

      <!-- logout -->
      <div class="items-stretch hidden lg:flex">
        <button @click="logout" class="btn btn-ghost btn-sm rounded-btn">
          خروج
        </button>
      </div>
      <!-- /logout -->
    </template>

    <!-- guest -->
    <div v-else class="px-2">
      <div class="items-stretch hidden lg:flex">
        <router-link to="/auth" class="btn btn-ghost btn-sm rounded-btn">
          ورود
        </router-link>
      </div>
    </div>
    <!-- /guest -->
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { USER } from "@/store/state";
import { LOGOUT } from "@/store/actions";

export default {
  name: "Navbar",
  setup() {
    const store = useStore();
    const router = useRouter();

    const logout = () => {
      store.dispatch(LOGOUT);

      router.push({
        name: "Home",
      });
    };

    return {
      user: computed(() => store.state[USER]),
      logout,
    };
  },
};
</script>
