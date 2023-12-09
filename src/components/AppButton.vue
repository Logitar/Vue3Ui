<script setup lang="ts">
import { computed } from "vue";
import { useRouter, type RouteLocationRaw } from "vue-router";

import AppSpinner from "@/components/AppSpinner.vue";
import type { ButtonSize, ButtonType, ButtonVariant } from "@/types/components/AppButton";

const router = useRouter();

const props = withDefaults(
  defineProps<{
    /**
     * The button will display with a disabled style and will not react to events.
     */
    disabled?: boolean;
    /**
     * The Font Awesome icon to display when not loading.
     */
    icon?: string | string[];
    /**
     * The button will display a spinner instead of its icon.
     */
    loading?: boolean;
    /**
     * The name of the button, used when submitting forms.
     */
    name?: string;
    /**
     * The button text will not wrap.
     */
    nowrap?: boolean;
    /**
     * The button will use a colored outline instead of solid colors.
     */
    outline?: boolean;
    /**
     * The size of the button.
     */
    size?: ButtonSize;
    /**
     * The hidden text for accessibility of the button's spinner.
     */
    status?: string;
    /**
     * When clicked, the button will act as an hyperlink (`<a href...`).
     */
    to?: RouteLocationRaw;
    /**
     * The text displayed inside the button.
     */
    text?: string;
    /**
     * The type of the button.
     */
    type?: ButtonType;
    /**
     * The value of the button, used when submitting forms.
     */
    value?: string;
    /**
     * The color variant of the button.
     */
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

const emit = defineEmits<{
  /**
   * The button has been clicked.
   */
  (e: "click"): void;
}>();
</script>

<template>
  <button :class="classes" :disabled="disabled" :name="name" :type="type" :value="value" @click="onClick">
    <slot v-if="loading" name="spinner">
      <AppSpinner inline small />
      <span class="visually-hidden" role="status">{{ status }}</span>
      <template v-if="text">&nbsp;</template>
    </slot>
    <slot v-else-if="icon" name="iconOverride">
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
