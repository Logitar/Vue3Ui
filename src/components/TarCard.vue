<script setup lang="ts">
import TarImage from "./TarImage.vue";

import type { ImageOptions } from "@/types/components/TarImage";

defineProps<{
  /**
   * The parameters of the bottom image.
   */
  bottomImage?: ImageOptions;
  /**
   * The subtitle that will be displayed inside the card.
   */
  subtitle?: string;
  /**
   * The title that will be displayed inside the card.
   */
  title?: string;
  /**
   * The parameters of the top image.
   */
  topImage?: ImageOptions;
}>();
</script>

<template>
  <div class="card">
    <slot name="header"></slot>
    <slot name="image-top">
      <TarImage v-if="topImage" class="card-img-top" v-bind="topImage" />
    </slot>
    <slot name="contents">
      <div class="card-body">
        <slot name="title-override">
          <h5 v-if="title" class="card-title">{{ title }}</h5>
        </slot>
        <slot name="subtitle-override">
          <h6 v-if="subtitle" class="card-subtitle mb-2 text-body-secondary">{{ subtitle }}</h6>
        </slot>
        <slot></slot>
      </div>
    </slot>
    <slot name="image-bottom">
      <TarImage v-if="bottomImage" class="card-img-bottom" v-bind="bottomImage" />
    </slot>
    <slot name="footer"></slot>
  </div>
</template>
