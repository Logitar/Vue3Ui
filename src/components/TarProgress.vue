<script setup lang="ts">
import { computed } from "vue";

import type { ProgressVariant } from "@/types/components/TarProgress";

const props = withDefaults(
  defineProps<{
    animated?: boolean;
    ariaLabel?: string;
    label?: string;
    max?: number | string;
    min?: number | string;
    striped?: boolean;
    value?: number | string;
    variant?: ProgressVariant;
  }>(),
  {
    animated: false,
    max: 100,
    min: 0,
    striped: false,
    value: 0,
  },
); // TODO(fpion): document

const classes = computed<string[]>(() => {
  const classes = ["progress-bar"];
  if (props.animated) {
    classes.push("progress-bar-animated");
  }
  if (props.striped) {
    classes.push("progress-bar-striped");
  }
  if (props.variant) {
    classes.push(`text-bg-${props.variant}`);
  }
  return classes;
});
const width = computed<string>(() => `${props.value}%`);
</script>

<template>
  <div class="progress" role="progressbar" :aria-label="ariaLabel" :aria-valuenow="value" :aria-valuemin="min" :aria-valuemax="max">
    <slot>
      <div :class="classes" :style="{ width }">{{ label }}</div>
    </slot>
  </div>
</template>
