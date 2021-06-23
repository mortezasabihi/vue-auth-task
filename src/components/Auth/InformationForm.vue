<template>
  <h2 class="card-title">اطلاعات خود را وارد کنید.</h2>

  <!-- form -->
  <form @submit="onSubmit">
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
      {{ loading ? "..." : "ثبت نام" }}
    </button>
  </form>
  <!-- /form -->
</template>

<script>
import { computed, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import { FormInput } from "@/components/Ui";
import { LOADING } from "@/store/state";
import { ADD_PASSWORD } from "@/store/actions";

const schema = yup.object().shape({
  password: yup
    .string()
    .min(8, "رمز عبور نمیتواند کمتر از ۸ کاراکتر باشد.")
    .required("رمز عبور اجباری است."),
  re_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "رمز عبور تطابق ندارد."),
});

export default {
  name: "InformationForm",
  components: {
    FormInput,
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const { meta, handleSubmit, errors } = useForm({
      validationSchema: schema,
    });
    const { value: password } = useField("password");
    const { value: rePassword } = useField("re_password");

    const onSubmit = handleSubmit((values) =>
      store.dispatch(ADD_PASSWORD, values)
    );

    watch(
      () => store.state[LOADING],
      (value) =>
        !value &&
        router.push({
          name: "Home",
        })
    );

    return {
      meta,
      onSubmit,
      password,
      rePassword,
      errors,
      loading: computed(() => store.state[LOADING]),
    };
  },
};
</script>
