<template>
  <div
    class="
      navbar
      mb-2
      shadow-lg
      bg-neutral
      text-neutral-content
      rounded-box
      sticky
      top-0
    "
  >
    <div class="flex-1 px-2 mx-2 lg:flex">
      <h1 class="text-lg font-bold">Brand</h1>
    </div>

    <div class="px-2">
      <!-- guest -->
      <div class="items-stretch hidden lg:flex">
        <router-link to="/auth" class="btn btn-ghost btn-sm rounded-btn">
          Login
        </router-link>
      </div>
      <!-- /guest -->
    </div>

    <!-- logged in -->
    <div class="flex-none">
      <div class="avatar">
        <div class="rounded-full w-10 h-10 m-1">
          <img src="https://i.pravatar.cc/500?img=32" />
        </div>
      </div>
    </div>
    <!-- /logged in -->
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
