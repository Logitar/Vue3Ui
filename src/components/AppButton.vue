<script setup lang="ts">
import { computed } from "vue";
import { useRouter, type RouteLocationRaw } from "vue-router";

import AppSpinner from "@/components/AppSpinner.vue";
import type { ButtonSize, ButtonType, ButtonVariant } from "@/types/components/AppButton";

const router = useRouter();

const props = withDefaults(
  defineProps<{
    disabled?: boolean;
    icon?: string | string[];
    loading?: boolean;
    name?: string;
    nowrap?: boolean;
    outline?: boolean;
    size?: ButtonSize;
    status?: string;
    to?: RouteLocationRaw;
    text?: string;
    type?: ButtonType;
    value?: string;
    variant?: ButtonVariant;
  }>(),
  {
    disabled: false,
    loading: false,
    nowrap: false,
    outline: false,
    size: "medium",
    status: "Loading...",
    type: "button",
    variant: "primary",
  }
);

const classes = computed<string[]>(() => {
  const classes = ["btn"];
  if (props.variant) {
    classes.push(props.outline ? `btn-outline-${props.variant}` : `btn-${props.variant}`);
  }
  if (props.nowrap) {
    classes.push("text-nowrap");
  }
  switch (props.size) {
    case "large":
      classes.push("btn-lg");
      break;
    case "small":
      classes.push("btn-sm");
      break;
  }
  return classes;
});

function onClick(): void {
  if (props.to) {
    router.push(props.to);
  }
}
</script>

<template>
  <button :class="classes" :disabled="disabled" :name="name" :type="type" :value="value" @click="onClick">
    <slot v-if="loading" name="spinner">
      <AppSpinner inline small />
      <span class="visually-hidden" role="status">{{ status }}</span>
      <template v-if="text">&nbsp;</template>
    </slot>
    <slot v-else-if="icon" name="icon">
      <font-awesome-icon :icon="icon" />
      <template v-if="text">&nbsp;</template>
    </slot>
    <template v-if="text">{{ text }}</template>
    <slot></slot>
  </button>
</template>

<style scoped>
button:disabled {
  cursor: not-allowed !important;
}
</style>
