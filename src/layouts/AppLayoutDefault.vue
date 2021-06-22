<template>
  <div class="mt-8">
    <!-- navbar -->
    <Navbar />
    <!-- /navbar -->

    <main class="mt-8">
      <slot />
    </main>
  </div>
</template>

<script>
import { Navbar } from "@/components/Layout";

export default {
  name: "AppLayoutDefault",
  components: {
    Navbar,
  },
};
</script>
