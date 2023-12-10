<script setup lang="ts">
import { computed, provide, ref, watch } from "vue";

import { bindItemKey, unbindItemKey } from "@/types/components/TarAccordion";

const props = withDefaults(
  defineProps<{
    /**
     * The accordion items will stay open when another item is opened.
     */
    alwaysOpen?: boolean;
    /**
     * Removes some borders and rounded cornes to render accordions edge-to-edge with their parent container.
     */
    flush?: boolean;
    /**
     * The unique identifier of the accordion container.
     */
    id?: string;
  }>(),
  {
    alwaysOpen: false,
    flush: false,
    id: "accordion",
  },
);

const items = ref<Map<string, (value?: string) => void>>(new Map<string, (value?: string) => void>());

const classes = computed<string[]>(() => {
  const classes = ["accordion"];
  if (props.flush) {
    classes.push("accordion-flush");
  }
  return classes;
});

function bindItem(id: string, setParentId: (value?: string) => void): void {
  items.value.set(id, setParentId);
  if (!props.alwaysOpen) {
    setParentId(props.id);
  }
}
function unbindItem(id: string): void {
  items.value.delete(id);
}
provide(bindItemKey, bindItem);
provide(unbindItemKey, unbindItem);

watch(
  () => props.alwaysOpen,
  (alwaysOpen) => {
    if (alwaysOpen) {
      for (const setParentId of items.value.values()) {
        setParentId(undefined);
      }
    } else {
      for (const setParentId of items.value.values()) {
        setParentId(props.id);
      }
    }
  },
);
watch(
  () => props.id,
  (id) => {
    if (!props.alwaysOpen) {
      for (const setParentId of items.value.values()) {
        setParentId(id);
      }
    }
  },
);
</script>

<template>
  <div :class="classes" :id="id">
    <slot></slot>
  </div>
</template>
