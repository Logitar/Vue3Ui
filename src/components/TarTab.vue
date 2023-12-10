<script setup lang="ts">
import { computed, inject, onMounted, onUnmounted } from "vue";

import { bindTabKey, unbindTabKey, type TabOptions } from "@/types/components/TarTabs";

const bindTab: ((tab: TabOptions) => void) | undefined = inject(bindTabKey);
const unbindTab: ((tab: TabOptions) => void) | undefined = inject(unbindTabKey);

const props = withDefaults(
  defineProps<{
    /**
     * This tabs contents will be displayed initially.
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

// const id = ref<string>(uuidv4()); // TODO(fpion): generate random nanoid if unspecified

const classes = computed<string[]>(() => {
  const classes = ["tab-pane", "fade"];
  if (props.active) {
    classes.push("show");
    classes.push("active");
  }
  return classes;
});

const options = computed<TabOptions>(() => ({ active: props.active, disabled: props.disabled, id: props.id, title: props.title }));
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
</script>

<template>
  <!-- TODO(fpion): should tabindex be different for each tab? -->
  <div :class="classes" :id="`tab_${id}_pane`" role="tabpanel" :aria-labelledby="`tab_${id}_head`" tabindex="0">
    <slot></slot>
  </div>
</template>
