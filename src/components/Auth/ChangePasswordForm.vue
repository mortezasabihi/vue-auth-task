<template>
  <h2 class="card-title">اطلاعات خود را وارد کنید.</h2>

  <!-- form -->
  <form @submit="onSubmit">
    <FormInput
      v-model="oldPassword"
      label="رمز عبور قبلی"
      placeholder="رمز عبور قبلی خود را وارد کنید"
      :error="errors.old_password"
      type="password"
    />
    <FormInput
      v-model="password"
      label="رمز عبور"
      placeholder="رمز عبور خود را وارد کنید"
      :error="errors.password"
      type="password"
    />
    <FormInput
      v-model="rePassword"
      label="تکرار رمز عبور"
      placeholder="رمز عبور خود را تکرار وارد کنید"
      :error="errors.re_password"
      type="password"
    />

    <button
      type="submit"
      :disabled="!meta.dirty || !meta.valid"
      class="btn btn-block btn-primary"
    >
      تایید
    </button>
  </form>
  <!-- /form -->
</template>

<script>
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import { FormInput } from "@/components/Ui";

const schema = yup.object().shape({
  old_password: yup
    .string()
    .min(8, "رمز عبور نمیتواند کمتر از ۸ کاراکتر باشد.")
    .required("رمز عبور اجباری است."),
  password: yup
    .string()
    .min(8, "رمز عبور نمیتواند کمتر از ۸ کاراکتر باشد.")
    .required("رمز عبور اجباری است."),
  re_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "رمز عبور تطابق ندارد.")
    .required("تکرار رمز عبور اجباری است."),
});

export default {
  name: "InformationForm",
  components: {
    FormInput,
  },
  setup() {
    const { meta, handleSubmit, errors } = useForm({
      validationSchema: schema,
    });
    const { value: oldPassword } = useField("old_password");
    const { value: password } = useField("password");
    const { value: rePassword } = useField("re_password");

    const onSubmit = handleSubmit(() => {
      console.log(password);
      console.log(rePassword);
    });

    return {
      meta,
      onSubmit,
      oldPassword,
      password,
      rePassword,
      errors,
    };
  },
};
</script>
