<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted, onUpdated } from "vue";
import { nanoid } from "nanoid";

import { bindTabKey, unbindTabKey, type TabOptions } from "@/types/components/TarTabs";

const bindTab: ((tab: TabOptions) => void) | undefined = inject(bindTabKey);
const unbindTab: ((tab: TabOptions) => void) | undefined = inject(unbindTabKey);

const props = withDefaults(
  defineProps<{
    /**
     * This tab contents will be displayed initially.
     */
    active?: boolean;
    /**
     * The tab header will be disabled, so clicking it will not display the tab contents.
     */
    disabled?: boolean;
    /**
     * The unique identifier of the tab. A random `nanoid` will be generated if unspecified.
     */
    id?: string;
    /**
     * The header title of the tab.
     */
    title: string;
  }>(),
  {
    active: false,
    disabled: false,
  },
);

const classes = computed<string[]>(() => {
  const classes = ["tab-pane", "fade"];
  if (props.active) {
    classes.push("show");
    classes.push("active");
  }
  return classes;
});
const tabId = computed<string>(() => props.id ?? nanoid());

const options = computed<TabOptions>(() => ({ active: props.active, disabled: props.disabled, id: tabId.value, title: props.title }));
onMounted(() => {
  if (bindTab) {
    bindTab(options.value);
  }
});
onUnmounted(() => {
  if (unbindTab) {
    unbindTab(options.value);
  }
});
onUpdated(() => {
  if (bindTab) {
    bindTab(options.value);
  }
});
</script>

<template>
  <div :class="classes" :id="`tab_${tabId}_pane`" role="tabpanel" :aria-labelledby="`tab_${tabId}_head`" tabindex="0">
    <slot></slot>
  </div>
</template>
