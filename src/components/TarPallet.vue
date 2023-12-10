<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, ref } from "vue";
import { nanoid } from "nanoid";

import { bindItemKey, unbindItemKey } from "@/types/components/TarAccordion";

const bindItem: ((id: string, setParentId: (value?: string) => void) => void) | undefined = inject(bindItemKey);
const unbindItem: ((id: string) => void) | undefined = inject(unbindItemKey);

const props = withDefaults(
  defineProps<{
    /**
     * This accordion pallet contents will be displayed initially.
     */
    active?: boolean;
    /**
     * The unique identifier of the accordion pallet. A random `nanoid` will be generated if unspecified.
     */
    id?: string;
    /**
     * The title of this accordion pallet.
     */
    title: string;
  }>(),
  {
    active: false,
  },
);

const parent = ref<string>();

const palletId = computed<string>(() => props.id ?? nanoid());

function setParentId(value?: string): void {
  parent.value = value ? `#${value}` : undefined;
}
onMounted(() => {
  if (bindItem) {
    bindItem(palletId.value, setParentId);
  }
});
onUnmounted(() => {
  if (unbindItem) {
    unbindItem(palletId.value);
  }
});
</script>

<template>
  <div class="accordion-item">
    <h2 class="accordion-header" :id="`heading_${palletId}`">
      <button
        :class="{ 'accordion-button': true, collapsed: !active }"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="`#collapse_${palletId}`"
        aria-expanded="true"
        :aria-controls="`collapse_${palletId}`"
      >
        {{ title }}
      </button>
    </h2>
    <div
      :id="`collapse_${palletId}`"
      :class="{ 'accordion-collapse': true, collapse: true, show: active }"
      :aria-labelledby="`heading_${palletId}`"
      :data-bs-parent="parent"
    >
      <div class="accordion-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
