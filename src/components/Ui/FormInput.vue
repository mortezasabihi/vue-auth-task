<template>
  <div class="form-control">
    <!-- label -->
    <label class="label">
      <span class="label-text">{{ label }}</span>
    </label>
    <!-- /label -->

    <!-- input -->
    <input
      type="text"
      :class="['input input-bordered mb-3', error && 'input-error text-error']"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
    />
    <!-- /input -->

    <!-- error message -->
    <span v-if="error" class="text-error text-xs mb-3">{{ error }}</span>
    <!-- /error message -->
  </div>
</template>

<script>
export default {
  name: "FormInput",
  props: {
    modelValue: {
      required: false,
      type: String,
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
};
</script>
