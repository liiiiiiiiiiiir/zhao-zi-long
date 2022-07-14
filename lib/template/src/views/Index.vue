<script lang="ts" setup>
import { computed } from "vue";
import useIndexStore from "@/store";
import { useIntervalFn } from "@vueuse/core";

const indexStore = useIndexStore();
const trans = computed(() => indexStore.trans);

useIntervalFn(() => {
  indexStore.toggleLang();
}, 1500);
</script>

<template>
  <div class="index-page">
    <h1>Hello {{ trans }}</h1>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  text-align: center;
  padding: 20px 0;
  height: 40px;
  line-height: 40px;
}
</style>
