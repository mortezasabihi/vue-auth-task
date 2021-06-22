<template>
  <h2 class="card-title">شماره موبایل خود را وارد کنید.</h2>

  <!-- form -->
  <form @submit="onSubmit">
    <FormInput
      v-model="value"
      label="شماره موبایل"
      placeholder="شماره موبایل خود را وارد کنید"
      :error="errorMessage"
    />

    <button
      type="submit"
      :disabled="!meta.dirty || !meta.valid"
      class="btn btn-block btn-primary"
    >
      تایید شماره همراه
    </button>
  </form>
  <!-- /form -->
</template>

<script>
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import { MOBILE } from "@/regexes";
import { FormInput } from "@/components/Ui";

const schema = yup
  .string()
  .matches(MOBILE, "شماره موبایل وارد شده معتبر نیست.")
  .required("شماره موبایل اجباری است.");

export default {
  name: "UserCheckForm",
  components: {
    FormInput,
  },
  setup() {
    const { handleSubmit, meta } = useForm();
    const { errorMessage, value } = useField("mobile", schema);

    const onSubmit = handleSubmit((values) => {
      console.log(values);
    });

    return {
      errorMessage,
      value,
      meta,
      onSubmit,
    };
  },
};
</script>
