<template>
  <a class="text-primary hover:text-blue" href="#">{{ text }}</a>
</template>

<script setup>
  import { defineProps } from 'vue';

  defineProps({
    text: String,
  });
</script>
