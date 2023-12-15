<script setup lang="ts">
import { computed, ref } from "vue";
import { nanoid } from "nanoid";

import TarToast from "./TarToast.vue";
import type { HorizontalAlignment, ToastOptions, VerticalAlignment } from "@/types/components/TarToast";

const props = withDefaults(
  defineProps<{
    /**
     * The horizontal alignment of toasts in this container.
     */
    horizontalAlignment?: HorizontalAlignment;
    /**
     * The unique identifier of the container.
     */
    id?: string;
    /**
     * The vertical alignment of toasts in this container.
     */
    verticalAlignment?: VerticalAlignment;
  }>(),
  {
    horizontalAlignment: "right",
    id: "toasts",
    verticalAlignment: "top",
  },
);

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

function add(toast: ToastOptions): void {
  const key = [props.id, "toast", nanoid()].join("-");
  toasts.value.set(key, toast);
}
defineExpose({ add });
</script>

<template>
  <div :class="classes">
    <TarToast v-for="[key, toast] in toasts" :key="key" :id="key" v-bind="toast" @hidden="toasts.delete(key)">{{ toast.message }}</TarToast>
  </div>
</template>
