<script setup lang="ts">
import { computed } from "vue";

import type { AlertOptions } from "@/types/TarAlert";
import { parseBoolean } from "@/helpers/parsingUtils";

const props = withDefaults(defineProps<AlertOptions>(), {
  close: "Close",
  variant: "primary",
});

const isShown = computed<boolean>(() => parseBoolean(props.show) || parseBoolean(props.modelValue) || false);
const classes = computed<string[]>(() => {
  const classes = ["alert"];
  if (props.variant) {
    classes.push(`alert-${props.variant}`);
  }
  if (parseBoolean(props.dismissible)) {
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
    <slot v-if="parseBoolean(dismissible)" name="close-button">
      <button type="button" class="btn-close" :aria-label="close" @click="$emit('update:model-value', false)"></button>
    </slot>
  </div>
</template>