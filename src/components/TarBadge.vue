<script setup lang="ts">
import { computed } from "vue";
import { parsingUtils } from "logitar-js";

import type { BadgeOptions } from "../types/TarBadge";

const { parseBoolean } = parsingUtils;

const props = withDefaults(defineProps<BadgeOptions>(), {
  variant: "primary",
});

const classes = computed<string[]>(() => {
  const classes = ["badge"];
  if (parseBoolean(props.pill)) {
    classes.push("rounded-pill");
  }
  if (props.variant) {
    classes.push(`text-bg-${props.variant}`);
  }
  return classes;
});
</script>

<template>
  <span :class="classes">
    <slot></slot>
  </span>
</template>
