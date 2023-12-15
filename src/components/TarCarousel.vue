<script setup lang="ts">
import { computed } from "vue";

import TarImage from "./TarImage.vue";
import type { ImageOptions } from "@/types/components/TarImage";

const props = withDefaults(
  defineProps<{
    /**
     * The carousel will be playing automatically and pause when hovered with the mouse. For accessibility reasons, it is recommended to avoid using autoplaying carousels.
     */
    autoplay?: boolean;
    /**
     * The carousel will be animated using a fade transition instead of a slide.
     */
    fade?: boolean;
    /**
     * The unique identifier of the carousel.
     */
    id?: string;
    /**
     * The images to display inside the carousel.
     */
    images?: ImageOptions[];
    /**
     * The hidden text that will be displayed inside the next button.
     */
    next?: string;
    /**
     * The hidden text that will be displayed inside the next button.
     */
    previous?: string;
    /**
     * When set to false, the support of swiping left/right on touchscreen devices will be disabled.
     */
    touch?: boolean;
  }>(),
  {
    autoplay: false,
    fade: false,
    id: "carousel",
    images: () => [],
    next: "Next",
    previous: "Previous",
    touch: true,
  },
);

const classes = computed<string[]>(() => {
  const classes = ["carousel", "slide"];
  if (props.fade) {
    classes.push("carousel-fade");
  }
  return classes;
});
</script>

<template>
  <div :id="id" :class="classes" :data-bs-ride="autoplay" :data-bs-touch="touch">
    <slot name="indicators">
      <div class="carousel-indicators">
        <button
          v-for="(image, index) in images"
          :key="`${id}-indicator-${index}`"
          type="button"
          :aria-current="index === 0 || undefined"
          :aria-label="image.alt ?? `Slide ${index + 1}`"
          :class="{ active: index === 0 }"
          :data-bs-slide-to="index"
          :data-bs-target="`#${id}`"
        ></button>
      </div>
    </slot>
    <div class="carousel-inner">
      <slot>
        <div v-for="(image, index) in images" :key="`${id}-item-${index}`" :class="{ 'carousel-item': true, active: index === 0 }">
          <TarImage v-bind="image" />
        </div>
      </slot>
    </div>
    <slot name="buttons">
      <button class="carousel-control-prev" type="button" :data-bs-target="`#${id}`" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">{{ previous }}</span>
      </button>
      <button class="carousel-control-next" type="button" :data-bs-target="`#${id}`" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">{{ next }}</span>
      </button>
    </slot>
  </div>
</template>
