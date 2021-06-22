<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="card shadow-lg w-6/12">
      <div class="card-body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppAuthLayout",
};
</script>
