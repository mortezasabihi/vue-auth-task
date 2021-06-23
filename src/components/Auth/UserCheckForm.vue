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
      {{ loading ? "..." : "تایید شماره همراه" }}
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
import { MOBILE } from "@/regexes";
import { FormInput } from "@/components/Ui";
import { LOADING, STATUS, TOKEN } from "@/store/state";
import { CHECK_USER } from "@/store/actions";

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
    const store = useStore();
    const router = useRouter();
    const { handleSubmit, meta } = useForm();
    const { errorMessage, value } = useField("phone", schema);

    const onSubmit = handleSubmit((values) =>
      store.dispatch(CHECK_USER, values)
    );

    // redirect user to suitable page based on the status code
    watch(
      () => store.state[STATUS],
      (status) => {
        const token = store.state[TOKEN];

        if (status === 0 || (status === 1 && !token)) {
          router.push({
            name: "AuthVerify",
          });
        } else if (status === 1 && token) {
          router.push({
            name: "AuthInformation",
          });
        } else if (status === 2) {
          router.push({
            name: "AuthLogin",
            query: {
              phone: value.value,
            },
          });
        }
      }
    );

    return {
      errorMessage,
      value,
      meta,
      onSubmit,
      loading: computed(() => store.state[LOADING]),
    };
  },
};
</script>
