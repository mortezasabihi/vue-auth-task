<template>
  <VerifyCode
    :phone="phone"
    @verified="$router.push({ name: 'AuthInformation' })"
  >
    <button
      type="button"
      @click="changePhoneNumber"
      class="mt-3 block font-bold text-sm text-accent-focus underline"
    >
      اصلاح شماره موبایل
    </button>
  </VerifyCode>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import VerifyCode from "./VerifyCode.vue";
import { SET_STATUS } from "@/store/mutations";

export default {
  name: "VerifyCodeForm",
  components: {
    VerifyCode,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const changePhoneNumber = () => {
      store.commit(SET_STATUS, 0);
      router.push({
        name: "Auth",
      });
    };

    return {
      changePhoneNumber,
    };
  },
};
</script>
