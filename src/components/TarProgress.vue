<script setup lang="ts">
import { computed } from "vue";

import type { ProgressVariant } from "@/types/components/TarProgress";

const props = withDefaults(
  defineProps<{
    /**
     * The progress bar will be animated. The `striped` property must be set to `true` for the animation to function properly.
     */
    animated?: boolean;
    /**
     * The accessibility label describing the progress bar.
     */
    ariaLabel?: string;
    /**
     * The text displayed inside the progress bar.
     */
    label?: string;
    /**
     * The maximum value of the progress bar.
     */
    max?: number | string;
    /**
     * The minimum value of the progress bar.
     */
    min?: number | string;
    /**
     * The progress bar will display with a striped style.
     */
    striped?: boolean;
    /**
     * The current value of the progress bar, between `min` and `max`.
     */
    value?: number | string;
    /**
     * The color variant of the progress bar.
     */
    variant?: ProgressVariant;
  }>(),
  {
    animated: false,
    max: 100,
    min: 0,
    striped: false,
    value: 0,
  },
);

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
