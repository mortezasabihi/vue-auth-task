<template>
  <div class="form-control">
    <!-- label -->
    <label class="label">
      <span class="label-text">{{ label }}</span>
    </label>
    <!-- /label -->

    <!-- inputs -->
    <div class="grid gap-10 grid-flow-col mb-3" style="direction: ltr">
      <input
        v-for="(l, i) in length"
        :key="l"
        type="text"
        pattern="\d*"
        maxlength="1"
        :class="[
          'input input-bordered w-full text-center',
          error && 'input-error text-error',
        ]"
        :ref="setItemRef"
        :value="inputValue[i]"
        @input="onInput(i, $event)"
      />
    </div>
    <!-- /inputs -->

    <!-- error message -->
    <span v-if="error" class="text-error text-xs mb-3">{{ error }}</span>
    <!-- /error message -->
  </div>
</template>

<script>
import { ref, onMounted, watch } from "vue";

export default {
  name: "FormVerificationCodeInput",
  props: {
    modelValue: {
      required: false,
      type: [Number, String],
      default: "",
    },
    length: {
      required: false,
      type: Number,
      default: 5,
    },
    label: {
      required: true,
      type: String,
    },
    error: {
      required: false,
      type: String,
      default: "",
    },
  },
  setup(props, { emit }) {
    const inputValue = ref([]);
    const inputsRef = ref([]);

    // fill inputValue immediately
    watch(
      () => props.modelValue,
      (value) => {
        inputValue.value = Array.from(String(value), Number);
      },
      {
        immediate: true,
      }
    );

    const setItemRef = (el) => el && inputsRef.value.push(el);
    const onInput = (index, event) => {
      const value = event.target.value;

      if (value && !isNaN(parseInt(value))) {
        inputValue.value[index] = parseInt(value);

        if (event.target.nextElementSibling) {
          inputsRef.value[index + 1].focus();
        }

        const result = parseInt(
          inputValue.value.toString().replaceAll(",", "")
        );
        emit("update:modelValue", result);
      }
    };

    // focus first input
    onMounted(() => inputsRef.value[0].focus());

    return {
      inputValue,
      inputsRef,
      setItemRef,
      onInput,
    };
  },
};
</script>

<style scoped>
.input::-webkit-outer-spin-button,
.input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.input[type="number"] {
  -moz-appearance: textfield;
}
</style>
