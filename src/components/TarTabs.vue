<script setup lang="ts">
import { provide, ref } from "vue";

import { bindTabKey, unbindTabKey, type TabOptions } from "@/types/components/TarTabs";

withDefaults(
  defineProps<{
    /**
     * The unique identifier of the tab container.
     */
    id?: string;
  }>(),
  {
    id: "tabs",
  },
);

const tabs = ref<Map<string, TabOptions>>(new Map<string, TabOptions>());

function bindTab(tab: TabOptions): void {
  tabs.value.set(tab.id, tab);
}
function unbindTab(tab: TabOptions): void {
  tabs.value.delete(tab.id);
}
provide(bindTabKey, bindTab);
provide(unbindTabKey, unbindTab);
</script>

<template>
  <div>
    <ul class="nav nav-tabs" :id="`tab_${id}_headers`" role="tablist">
      <li v-for="[key, tab] in tabs" :key="key" class="nav-item" role="presentation">
        <button
          :class="{ 'nav-link': true, active: tab.active }"
          :id="`tab_${tab.id}_head`"
          data-bs-toggle="tab"
          :data-bs-target="`#tab_${tab.id}_pane`"
          type="button"
          role="tab"
          :aria-controls="`${tab.id}_pane`"
          :aria-selected="tab.active ? 'true' : 'false'"
          :disabled="tab.disabled"
        >
          {{ tab.title }}
        </button>
      </li>
    </ul>
    <div class="tab-content mt-3" :id="`${id}_contents`">
      <slot></slot>
    </div>
  </div>
</template>
