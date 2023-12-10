<script setup lang="ts">
import { computed } from "vue";

import type { BadgeVariant } from "@/types/components/TarBadge";

const props = withDefaults(
  defineProps<{
    /**
     * The badge will be rounded, using a larger `border-radius`.
     */
    rounded?: boolean;
    /**
     * The color variant of the badge.
     */
    variant?: BadgeVariant;
  }>(),
  {
    rounded: false,
    variant: "primary",
  },
);

const classes = computed<string[]>(() => {
  const classes = ["badge"];
  if (props.rounded) {
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
