<template>
  <div class="mt-3 flex items-center">
    <span class="text-sm">
      {{
        timer > 0 ? "زمان باقی مانده تا دریافت مجدد رمز:" : "رمز دریافت نکردید؟"
      }}
    </span>

    <span v-if="timer > 0" class="mr-2 text-accent">
      {{ formatedTimer }}
    </span>

    <button
      v-else
      type="button"
      class="btn btn-accent btn-xs mr-2"
      @click="getNewCode"
    >
      دریافت مجدد رمز
    </button>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "RequestNewVerificationCode",
  setup() {
    const timerInitialValue = 120;
    const timer = ref(timerInitialValue);

    let interval = setInterval(() => setTimer(), 1000);

    const setTimer = () => {
      timer.value === 0 ? clearInterval(interval) : timer.value--;
    };
    const getNewCode = () => {
      clearInterval(interval);
      timer.value = timerInitialValue;
      interval = setInterval(() => setTimer(), 1000);
    };

    const formatedTimer = computed(() =>
      new Date(timer.value * 1000).toISOString().substr(14, 5)
    );

    return {
      timer,
      formatedTimer,
      getNewCode,
    };
  },
};
</script>
