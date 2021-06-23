<template>
  <VerifyCode
    v-if="!verified"
    :phone="$route.query.phone"
    @verified="verified = true"
  />
  <InformationForm v-else />
</template>

<script>
import { InformationForm, VerifyCode } from "@/components/Auth";

export default {
  name: "ResetPasswordPage",
  components: {
    InformationForm,
    VerifyCode,
  },
  data() {
    return {
      verified: false,
    };
  },
};
</script>
