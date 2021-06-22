<template>
  <h2 class="card-title">اطلاعات خود را وارد کنید.</h2>

  <!-- form -->
  <form @submit="onSubmit">
    <FormInput
      v-model="phone"
      label="شماره موبایل"
      placeholder="شماره موبایل خود را وارد کنید"
      :error="errors.phone"
    />
    <FormInput
      v-model="password"
      label="رمز عبور"
      placeholder="رمز عبور خود را وارد کنید"
      :error="errors.password"
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
import { watch } from "vue";
import { useRoute } from "vue-router";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import { MOBILE } from "@/regexes";
import { FormInput } from "@/components/Ui";

const schema = yup.object().shape({
  phone: yup
    .string()
    .matches(MOBILE, "شماره موبایل وارد شده معتبر نیست.")
    .required("شماره موبایل اجباری است."),
  password: yup
    .string()
    .min(8, "رمز عبور نمیتواند کمتر از ۸ کاراکتر باشد.")
    .required("رمز عبور اجباری است."),
});

export default {
  name: "LoginForm",
  components: {
    FormInput,
  },
  setup() {
    const route = useRoute();
    const { meta, handleSubmit, errors, setFieldValue } = useForm({
      validationSchema: schema,
    });
    const { value: phone } = useField("phone");
    const { value: password } = useField("password");

    // set phone from route query
    watch(
      () => route.query.phone,
      (value) => {
        console.log(value);
        setFieldValue("phone", value);
      },
      {
        immediate: true,
      }
    );

    const onSubmit = handleSubmit(() => {
      console.log(phone);
      console.log(password);
    });

    return {
      meta,
      onSubmit,
      password,
      phone,
      errors,
    };
  },
};
</script>
