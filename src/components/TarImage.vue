<script setup lang="ts">
import { computed } from "vue";

import type { ImageOptions } from "@/types/TarImage";
import { parseBoolean, parseNumber } from "@/helpers/parsingUtils";

const props = defineProps<ImageOptions>();

const classes = computed<string[]>(() => {
  const classes: string[] = [];
  if (parseBoolean(props.circle)) {
    classes.push("rounded-circle");
  } else if (parseBoolean(props.rounded)) {
    classes.push("rounded");
  }
  if (parseBoolean(props.fluid)) {
    classes.push("img-fluid");
  }
  if (parseBoolean(props.thumbnail)) {
    classes.push("img-thumbnail");
  }
  return classes;
});
</script>

<template>
  <img :alt="alt" :class="classes" :height="parseNumber(height)" :src="src" :width="parseNumber(width)" />
</template>
