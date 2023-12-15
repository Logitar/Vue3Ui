<script setup lang="ts">
import { computed } from "vue";

import { parseNumber } from "@/helpers/numberUtils";

const props = withDefaults(
  defineProps<{
    /**
     * The text that will replace the image if the source is not found.
     */
    alt?: string;
    /**
     * The image will be displayed in a circle.
     */
    circle?: boolean;
    /**
     * The image will scale with its parent width.
     */
    fluid?: boolean;
    /**
     * The height of the image, in pixels, without an unit.
     */
    height?: number | string;
    /**
     * The corners of the image will be rounded.
     */
    rounded?: boolean;
    /**
     * The source URL of the image.
     */
    src: string;
    /**
     * The image will be given a rounded 1px border appearance.
     */
    thumbnail?: boolean;
    /**
     * The width of the image, in pixels, without an unit.
     */
    width?: number | string;
  }>(),
  {
    circle: false,
    fluid: false,
    rounded: false,
    thumbnail: false,
  },
);

const classes = computed<string[]>(() => {
  const classes: string[] = [];
  if (props.circle) {
    classes.push("rounded-circle");
  } else if (props.rounded) {
    classes.push("rounded");
  }
  if (props.fluid) {
    classes.push("img-fluid");
  }
  if (props.thumbnail) {
    classes.push("img-thumbnail");
  }
  return classes;
});
</script>

<template>
  <img :alt="alt" :class="classes" :height="parseNumber(height)" :src="src" :width="width" />
</template>
