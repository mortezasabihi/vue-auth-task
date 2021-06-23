<template>
  <h2 class="card-title">کد فعال سازی را وارد کنید.</h2>

  <!-- error -->
  <div v-if="error" class="alert alert-error">
    <div class="flex-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="w-6 h-6 mx-2 stroke-current"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
        ></path>
      </svg>
      <label>کد وارد شده اشتباه است.</label>
    </div>
  </div>
  <!-- /error -->

  <!-- form -->
  <form @submit.prevent="onSubmit">
    <FormVerificationCodeInput
      :label="`کد ۵ رقمی را به شماره ${phone} ارسال کردیم`"
      v-model="code"
    />

    <RequestNewVerificationCode @click="getCode" />

    <slot />

    <button
      type="submit"
      :disabled="code.toString().length !== 5"
      class="btn btn-block btn-primary mt-3"
    >
      {{ loading ? "..." : "ثبت" }}
    </button>
  </form>
  <!-- /form -->
</template>

<script>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import {
  FormVerificationCodeInput,
  RequestNewVerificationCode,
} from "@/components/Ui";
import { LOADING, ERROR, TOKEN } from "@/store/state";
import { GET_NEW_VERIFY_CODE, CHECK_VERIFY_CODE } from "@/store/actions";

export default {
  name: "VerifyCode",
  components: {
    FormVerificationCodeInput,
    RequestNewVerificationCode,
  },
  props: {
    phone: {
      required: true,
      type: String,
    },
  },
  setup(_, { emit }) {
    const store = useStore();
    const code = ref("");

    const getCode = () => store.dispatch(GET_NEW_VERIFY_CODE);
    const onSubmit = () => store.dispatch(CHECK_VERIFY_CODE, code.value);

    getCode();

    watch(
      () => store.state[TOKEN],
      (value) => value && emit("verified")
    );

    return {
      code,
      loading: computed(() => store.state[LOADING]),
      error: computed(() => store.state[ERROR]),
      onSubmit,
      getCode,
    };
  },
};
</script>
