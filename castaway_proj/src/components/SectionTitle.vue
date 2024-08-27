<template>
  <section class="py-40 px-48 text-primary flex items-center gap-60">
    <img class="shrink" src="@/../public/man-preview.svg">
    <div class="flex flex-col grow gap-90">
      <div class="title text-xl leading-88">
        Take your<br>
        podcast to the
        <span class="under text-2xl">
          next
          <img src="@/../public/underline.svg">
        </span>
        <span class="text-3xl font-medium">level</span>
      </div>
      <div class="text-base flex flex-col gap-16">
        Listen on
        <div class="flex flex-row gap-16">
          <img src="@/../public/icons/spotify.svg">
          <img src="@/../public/icons/half-circle.svg">
          <img src="@/../public/icons/cloud.svg">
          <img src="@/../public/icons/man-wave.svg">
          <img src="@/../public/icons/radio.svg">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss">
  .under {
    position: relative;

    img {
      position: absolute;

      height: 10px;
      bottom: -10px;
      left: 0;
    }
  }
</style>
