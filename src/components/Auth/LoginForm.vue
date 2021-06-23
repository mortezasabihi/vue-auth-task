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

    <router-link
      class="mb-3 block underline text-sm text-purple-500"
      :to="{ name: 'AuthResetPassword', query: { phone } }"
      >فراموشی رمز عبور</router-link
    >

    <button
      type="submit"
      :disabled="!meta.dirty || !meta.valid"
      class="btn btn-block btn-primary"
    >
      {{ loading ? "..." : "تایید" }}
    </button>
  </form>
  <!-- /form -->
</template>

<script>
import { watch, computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import { MOBILE } from "@/regexes";
import { FormInput } from "@/components/Ui";
import { LOADING, TOKEN } from "@/store/state";
import { LOGIN } from "@/store/actions";

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
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const { meta, handleSubmit, errors, setFieldValue } = useForm({
      validationSchema: schema,
    });
    const { value: phone } = useField("phone");
    const { value: password } = useField("password");

    // set phone from route query
    watch(
      () => route.query.phone,
      (value) => {
        setFieldValue("phone", value);
      },
      {
        immediate: true,
      }
    );

    watch(
      () => store.state[TOKEN],
      (value) =>
        value &&
        router.push({
          name: "Home",
        })
    );

    const onSubmit = handleSubmit((values) => store.dispatch(LOGIN, values));

    return {
      meta,
      onSubmit,
      password,
      phone,
      errors,
      loading: computed(() => store.state[LOADING]),
    };
  },
};
</script>
