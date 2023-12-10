<script setup lang="ts">
import { computed } from "vue";

import type { AlertVariant } from "@/types/components/TarAlert";

const props = withDefaults(
  defineProps<{
    /**
     * The close label for accessibility.
     */
    close?: string;
    /**
     * The alert will display a close button that will hide the alert when clicked.
     */
    dismissible?: boolean;
    /**
     * This property allows the alert to be bound onto a `v-model` directive to control its display.
     */
    modelValue?: boolean;
    /**
     * The alert will be displayed if this property is true.
     */
    show?: boolean;
    /**
     * The color variant of the alert.
     */
    variant?: AlertVariant;
  }>(),
  {
    close: "Close",
    dismissible: false,
    modelValue: false,
    show: false,
    variant: "primary",
  },
);

const isShown = computed<boolean>(() => props.show || props.modelValue);
const classes = computed<string[]>(() => {
  const classes = ["alert"];
  if (props.variant) {
    classes.push(`alert-${props.variant}`);
  }
  if (props.dismissible) {
    classes.push("alert-dismissible");
  }
  if (isShown.value) {
    classes.push("show");
  }
  return classes;
});

defineEmits<{
  /**
   * The alert has been closed.
   */
  (e: "update:model-value", value: false): void;
}>();
</script>

<template>
  <div :class="classes" role="alert" v-show="isShown">
    <slot></slot>
    <button v-if="dismissible" type="button" class="btn-close" :aria-label="close" @click="$emit('update:model-value', false)"></button>
  </div>
</template>
