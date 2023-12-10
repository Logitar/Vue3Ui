<script setup lang="ts">
import { computed } from "vue";

import type { SpinnerVariant } from "@/types/components/TarSpinner";

const props = withDefaults(
  defineProps<{
    /**
     * The spinner will have a growing animation, instead of a rotating animation.
     */
    grow?: boolean;
    /**
     * The spinner will not include a hidden text for accessibility. You have to add this code directly below the spinner:
     *
     * `<span class="visually-hidden" role="status">Loading...</span>`
     */
    inline?: boolean;
    /**
     * The spinner will have a smaller size, ideal when integrating it within other components, such as buttons.
     */
    small?: boolean;
    /**
     * The hidden text for accessibility.
     */
    text?: string;
    /**
     * The color variant of the spinner.
     */
    variant?: SpinnerVariant;
  }>(),
  {
    grow: false,
    inline: false,
    small: false,
    text: "Loading...",
  },
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
