<script setup lang="ts">
import type { Breadcrumb } from "@/types/components/TarBreadcrumb";

withDefaults(
  defineProps<{
    /**
     * The accessibility label describing the breadcrumbs.
     */
    ariaLabel?: string;
    /**
     * The list of breadcrumbs to display.
     */
    breadcrumbs?: Breadcrumb[];
    /**
     * The divider character or string that will be displayed between breadcrumbs.
     */
    divider?: string;
  }>(),
  {
    breadcrumbs: () => [],
  },
);

function getAriaCurrent(breadcrumb: Breadcrumb): "page" | undefined {
  return breadcrumb.href ? undefined : "page";
}
function getClasses(breadcrumb: Breadcrumb): string[] {
  const classes = ["breadcrumb-item"];
  if (!breadcrumb.href) {
    classes.push("active");
  }
  return classes;
}
</script>

<template>
  <nav :aria-label="ariaLabel" :style="divider ? { '--bs-breadcrumb-divider': `'${divider}'` } : undefined">
    <ol class="breadcrumb">
      <li v-for="(breadcrumb, index) in breadcrumbs" :key="index" :class="getClasses(breadcrumb)" :aria-current="getAriaCurrent(breadcrumb)">
        <a v-if="breadcrumb.href" :href="breadcrumb.href">{{ breadcrumb.text }}</a>
        <template v-else>{{ breadcrumb.text }}</template>
      </li>
    </ol>
  </nav>
</template>
