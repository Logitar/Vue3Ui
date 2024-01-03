<script setup lang="ts">
import { computed, ref } from "vue";
import { nanoid } from "nanoid";

import TarToast from "./TarToast.vue";
import type { ToastContainerOptions, ToastOptions } from "@/types/TarToasts";

const props = withDefaults(defineProps<ToastContainerOptions>(), {
  horizontalAlignment: "right",
  id: "toasts",
  verticalAlignment: "top",
});

const toasts = ref<Map<string, ToastOptions>>(new Map<string, ToastOptions>());

const classes = computed<string[]>(() => {
  const classes = ["toast-container", "position-fixed", "p-3"];
  switch (props.verticalAlignment) {
    case "bottom":
      classes.push("bottom-0");
      break;
    case "middle":
      classes.push("top-50");
      break;
    default:
      classes.push("top-0");
      break;
  }
  switch (props.horizontalAlignment) {
    case "center":
      classes.push("start-50");
      break;
    case "left":
      classes.push("start-0");
      break;
    default:
      classes.push("end-0");
      break;
  }
  return classes;
});

/**
 * Adds a toast to the toast container.
 * @param toast The toast to add.
 */
function toast(toast: ToastOptions): void {
  toast.id ??= `${props.id}-toast-${nanoid()}`;
  toasts.value.set(toast.id, toast);
}
defineExpose({ toast });
</script>

<template>
  <div :class="classes">
    <TarToast v-for="[key, toast] in toasts" :key="key" :id="key" v-bind="toast" @hidden="toasts.delete(key)" />
  </div>
</template>
