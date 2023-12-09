<script setup lang="ts">
import { computed } from "vue";

import type { SpinnerVariant } from "@/types/components/AppSpinner";

const props = withDefaults(
  defineProps<{
    grow?: boolean;
    inline?: boolean;
    small?: boolean;
    text?: string;
    variant?: SpinnerVariant;
  }>(),
  {
    grow: false,
    inline: false,
    small: false,
    text: "Loading...",
  }
);

const classes = computed<string[]>(() => {
  const type = props.grow ? "grow" : "border";
  const classes = [`spinner-${type}`];
  if (props.small) {
    classes.push(`spinner-${type}-sm`);
  }
  if (props.variant) {
    classes.push(`text-${props.variant}`);
  }
  return classes;
});
</script>

<template>
  <span v-if="inline" :class="classes" aria-hidden="true"></span>
  <div v-else :class="classes" role="status">
    <span class="visually-hidden">{{ text }}</span>
  </div>
</template>
