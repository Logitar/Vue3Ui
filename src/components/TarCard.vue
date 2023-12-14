<script setup lang="ts">
defineProps<{
  /**
   * The subtitle that will be displayed inside the card.
   */
  subtitle?: string;
  /**
   * The title that will be displayed inside the card.
   */
  title?: string;
}>();

// TODO(fpion): <!-- <img src="/francis-pion.jpg" class="card-img-top" alt="Photo de Francis Pion" /> -->
// TODO(fpion): <!-- <img src="/francis-pion.jpg" class="card-img-bottom" alt="Photo de Francis Pion" /> -->
</script>

<template>
  <div class="card">
    <slot name="header"></slot>
    <slot name="image-top">
      <!-- TODO(fpion): top image -->
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
      <!-- TODO(fpion): bottom image -->
    </slot>
    <slot name="footer"></slot>
  </div>
</template>
