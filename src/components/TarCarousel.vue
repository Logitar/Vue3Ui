<script setup lang="ts">
import { computed } from "vue";
import { parsingUtils } from "logitar-js";

import TarImage from "./TarImage.vue";
import type { CarouselOptions } from "../types/TarCarousel";

const { parseBoolean } = parsingUtils;

const props = withDefaults(defineProps<CarouselOptions>(), {
  id: "carousel",
  images: () => [],
  next: "Next",
  previous: "Previous",
  touch: true,
});

const classes = computed<string[]>(() => {
  const classes = ["carousel", "slide"];
  if (parseBoolean(props.fade)) {
    classes.push("carousel-fade");
  }
  return classes;
});
</script>

<template>
  <div :id="id" :class="classes" :data-bs-ride="parseBoolean(autoplay)" :data-bs-touch="parseBoolean(touch)">
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
