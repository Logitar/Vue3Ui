<script setup lang="ts">
import { computed } from "vue";

import type { PaginationPosition, PaginationSize } from "@/types/components/TarPagination";

const props = withDefaults(
  defineProps<{
    /**
     * The accessibility label describing the "first" button.
     */
    ariaFirst?: string;
    /**
     * The accessibility label describing the pagination.
     */
    ariaLabel?: string;
    /**
     * The accessibility label describing the "last" button.
     */
    ariaLast?: string;
    /**
     * The accessibility label describing the "next" button.
     */
    ariaNext?: string;
    /**
     * The accessibility label describing the "previous" button.
     */
    ariaPrevious?: string;
    /**
     * The number of items per page.
     */
    count?: number;
    /**
     * The characters to display in the "first" button. If unspecified, no "first" button will be displayed.
     */
    first?: string;
    /**
     * The characters to display in the "last" button. If unspecified, no "last" button will be displayed.
     */
    last?: string;
    /**
     * The number of the current page.
     */
    modelValue?: number;
    /**
     * The characters to display in the "next" button. If unspecified, no "next" button will be displayed.
     */
    next?: string;
    /**
     * The number of pages to display.
     */
    pages?: number;
    /**
     * The alignment of the pagination in its container.
     */
    position?: PaginationPosition;
    /**
     * The characters to display in the "previous" button. If unspecified, no "previous" button will be displayed.
     */
    previous?: string;
    /**
     * The size of the pagination.
     */
    size?: PaginationSize;
    /**
     * The total number of items.
     */
    total?: number;
  }>(),
  {
    ariaFirst: "First",
    ariaLast: "Last",
    ariaNext: "Next",
    ariaPrevious: "Previous",
    count: 10,
    first: "«",
    last: "»",
    modelValue: 1,
    next: "›",
    pages: 5,
    previous: "‹",
    size: "medium",
    total: 0,
  },
);

const classes = computed<string[]>(() => {
  const classes = ["pagination"];
  switch (props.position) {
    case "center":
      classes.push("justify-content-center");
      break;
    case "left":
      classes.push("justify-content-start");
      break;
    case "right":
      classes.push("justify-content-end");
      break;
  }
  switch (props.size) {
    case "large":
      classes.push("pagination-lg");
      break;
    case "small":
      classes.push("pagination-sm");
      break;
  }
  return classes;
});

const pageCount = computed<number>(() => Math.ceil(props.total / props.count));
const range = computed<number[]>(() => {
  const range = [props.modelValue];
  for (let i = 1; range.length < props.pages; i++) {
    let failures = 0;

    const next = props.modelValue + i;
    if (next <= pageCount.value) {
      range.push(next);
    } else {
      failures++;
    }

    if (range.length === props.pages) {
      break;
    }

    const previous = props.modelValue - i;
    if (previous >= 1) {
      range.unshift(previous);
    } else {
      failures++;
    }

    if (failures === 2) {
      break;
    }
  }
  return range;
});

const emit = defineEmits<{
  /**
   * A navigation to a different page has been requested.
   */
  (e: "update:model-value", value: number): void;
}>();
function go(page: number): void {
  if (props.modelValue !== page) {
    emit("update:model-value", page);
  }
}
</script>

<template>
  <nav :aria-label="ariaLabel">
    <ul :class="classes">
      <slot name="first-override">
        <li v-if="first" :class="{ 'page-item': true, disabled: modelValue <= 1 }">
          <a v-if="modelValue > 1" class="page-link" href="#" @click.prevent="go(1)" :aria-label="ariaFirst">
            <span aria-hidden="true">{{ first }}</span>
          </a>
          <span v-else class="page-link" :aria-label="ariaFirst">
            <span aria-hidden="true">{{ first }}</span>
          </span>
        </li>
      </slot>
      <slot name="previous-override">
        <li v-if="previous" :class="{ 'page-item': true, disabled: modelValue <= 1 }">
          <a v-if="modelValue > 1" class="page-link" href="#" @click.prevent="go(modelValue - 1)" :aria-label="ariaPrevious">
            <span aria-hidden="true">{{ previous }}</span>
          </a>
          <span v-else class="page-link" :aria-label="ariaPrevious">
            <span aria-hidden="true">{{ previous }}</span>
          </span>
        </li>
      </slot>
      <slot>
        <li
          v-for="page in range"
          :key="page"
          :class="{ 'page-item': true, active: modelValue === page }"
          :aria-current="modelValue === page ? 'page' : undefined"
        >
          <a v-if="modelValue !== page" class="page-link" href="#" @click.prevent="go(page)">{{ page }}</a>
          <span v-else class="page-link">{{ page }}</span>
        </li>
      </slot>
      <slot name="next-override">
        <li v-if="next" :class="{ 'page-item': true, disabled: modelValue >= pageCount }">
          <a v-if="modelValue < pageCount" class="page-link" href="#" @click.prevent="go(modelValue + 1)" :aria-label="ariaNext">
            <span aria-hidden="true">{{ next }}</span>
          </a>
          <span v-else class="page-link" :aria-label="ariaNext">
            <span aria-hidden="true">{{ next }}</span>
          </span>
        </li>
      </slot>
      <slot name="last-override">
        <li v-if="last" :class="{ 'page-item': true, disabled: modelValue >= pageCount }">
          <a v-if="modelValue < pageCount" class="page-link" href="#" @click.prevent="go(pageCount)" :aria-label="ariaLast">
            <span aria-hidden="true">{{ last }}</span>
          </a>
          <span v-else class="page-link" :aria-label="ariaLast">
            <span aria-hidden="true">{{ last }}</span>
          </span>
        </li>
      </slot>
    </ul>
  </nav>
</template>
