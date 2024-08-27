<template>
  <div class="app bg-bg">
    <HeaderMain/>
    <SectionTitle/>
  </div>
</template>

<script setup>
import HeaderMain from "@/components/HeaderMain.vue";
import SectionTitle from "@/components/SectionTitle.vue";
</script>

<style lang="scss">
  .app {
    min-height: 100vh;
    font-family: "DM Sans", sans-serif;
  }
</style>
