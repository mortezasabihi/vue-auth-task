<template>
  <h2 class="card-title">کد فعال سازی را وارد کنید.</h2>

  <!-- form -->
  <form>
    <FormVerificationCodeInput
      label="کد ۵ رقمی را به شماره 09378719525 ارسال کردیم "
      v-model="code"
    />

    <RequestNewVerificationCode />

    <router-link
      to="/auth"
      class="mt-3 block font-bold text-sm text-accent-focus underline"
    >
      اصلاح شماره موبایل
    </router-link>
  </form>
  <!-- /form -->
</template>

<script>
import {
  FormVerificationCodeInput,
  RequestNewVerificationCode,
} from "@/components/Ui";

export default {
  name: "VerifyCodeForm",
  components: {
    FormVerificationCodeInput,
    RequestNewVerificationCode,
  },
  data() {
    return {
      code: "",
    };
  },
};
</script>
