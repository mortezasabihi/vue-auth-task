<template>
  <div>
    <CheckUser />
  </div>
</template>

<script>
import { CheckUser } from "@/components/Auth";

export default {
  name: "AuthPage",
  components: {
    CheckUser,
  },
};
</script>
