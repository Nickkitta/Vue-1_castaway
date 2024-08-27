<template>
  <header class="p-48 flex flex-row justify-between items-center flex-wrap gap-16">
    <img src="./../../public/logo.svg" alt="castaway">
    <nav class="flex justify-between gap-40">
      <LinkBase text="Home"/>
      <LinkBase text="Episodes"/>
      <LinkBase text="About"/>
      <LinkBase text="Contact"/>
    </nav>
  </header>
</template>

<script setup>
import LinkBase from "@/components/LinkBase.vue";
</script>
