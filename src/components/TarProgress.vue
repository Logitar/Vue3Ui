<script setup lang="ts">
import { computed } from "vue";

import type { ProgressOptions } from "../types/TarProgress";
import { parseBoolean, parseNumber } from "../helpers/parsingUtils";

const props = withDefaults(defineProps<ProgressOptions>(), {
  max: 100,
  min: 0,
  value: 0,
});

const classes = computed<string[]>(() => {
  const classes = ["progress-bar"];
  if (parseBoolean(props.animated)) {
    classes.push("progress-bar-animated");
  }
  if (parseBoolean(props.striped)) {
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
  <div
    class="progress"
    role="progressbar"
    :aria-label="ariaLabel"
    :aria-valuenow="parseNumber(value)"
    :aria-valuemin="parseNumber(min)"
    :aria-valuemax="parseNumber(max)"
  >
    <slot>
      <div :class="classes" :style="{ width }">{{ label }}</div>
    </slot>
  </div>
</template>
