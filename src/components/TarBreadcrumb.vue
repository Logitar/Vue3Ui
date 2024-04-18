<script setup lang="ts">
import type { Breadcrumb, BreadcrumbOptions } from "../types/TarBreadcrumb";

withDefaults(defineProps<BreadcrumbOptions>(), {
  breadcrumbs: () => [],
});

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
