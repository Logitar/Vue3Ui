<script setup lang="ts">
import { computed, ref } from "vue";

import type { SelectOption, SelectSize } from "@/types/components/TarSelect";

const props = withDefaults(
  defineProps<{
    /**
     * The accessibility label describing the select.
     */
    ariaLabel?: string;
    /**
     * When adding a form select text, this is the unique identifier of the form text element. This will specify the `aria-describedby` attribute to ensure assistive technologies will announce the text when the user focuses or enters the control.
     */
    describedBy?: string;
    /**
     * The select will display with a disabled style and will not react to events.
     */
    disabled?: boolean;
    /**
     * The label will appear floating in the select, moving when the value is modified. The `label` property is required for floating labels to function properly.
     */
    floating?: boolean;
    /**
     * The unique identifier of the select.
     */
    id?: string;
    /**
     * The human readable caption of the select.
     */
    label?: string;
    /**
     * The value of the select.
     */
    modelValue?: string;
    /**
     * The select will allow multiple options to be selected.
     */
    multiple?: boolean;
    /**
     * The name of the select, used when submitting forms.
     */
    name?: string;
    /**
     * The options that will be displayed inside the select.
     */
    options?: SelectOption[];
    /**
     * This text will appear inside the select when no value has been selected.
     */
    placeholder?: string;
    /**
     * The select is required to submit the form its contained into.
     */
    required?: boolean;
    /**
     * The size of the select.
     */
    size?: SelectSize;
  }>(),
  {
    disabled: false,
    floating: false,
    multiple: false,
    options: () => [],
    required: false,
  },
);

const selectRef = ref<HTMLSelectElement>();

const classes = computed<string[]>(() => {
  const classes = ["form-select"];
  switch (props.size) {
    case "large":
      classes.push("form-select-lg");
      break;
    case "small":
      classes.push("form-select-sm");
      break;
  }
  return classes;
});

function focus(): void {
  selectRef.value?.focus();
}
defineExpose({ focus });

defineEmits<{
  /**
   * The select value has been updated.
   */
  (e: "update:model-value", value?: string): void;
}>();
</script>

<template>
  <div class="mb-3">
    <slot v-if="!floating" name="label-override">
      <label v-if="label" :for="id" class="form-label">
        {{ label }}
        <slot name="label-required" v-if="required">
          <span class="text-danger">*</span>
        </slot>
      </label>
    </slot>
    <slot name="before"></slot>
    <div class="input-group">
      <slot name="prepend"></slot>
      <div v-if="floating" class="form-floating">
        <slot>
          <select
            :aria-describedby="describedBy"
            :aria-label="ariaLabel"
            :class="classes"
            :disabled="disabled"
            :id="id"
            :multiple="multiple"
            :name="name"
            ref="selectRef"
            :required="required"
            :value="modelValue"
            @input="$emit('update:model-value', ($event.target as HTMLInputElement).value)"
          >
            <slot name="placeholder-override">
              <option v-if="placeholder" :disabled="required && Boolean(options.length)" value="">{{ placeholder }}</option>
            </slot>
            <option v-for="(option, index) in options" :key="index" :disabled="option.disabled" :label="option.label" :value="option.value">
              {{ option.text }}
            </option>
          </select>
        </slot>
        <slot name="label-override">
          <label :for="id">
            {{ label }}
            <slot name="label-required" v-if="required">
              <span class="text-danger">*</span>
            </slot>
          </label>
        </slot>
      </div>
      <slot v-else>
        <select
          :aria-describedby="describedBy"
          :aria-label="ariaLabel"
          :class="classes"
          :disabled="disabled"
          :id="id"
          :multiple="multiple"
          :name="name"
          ref="selectRef"
          :required="required"
          :value="modelValue"
          @input="$emit('update:model-value', ($event.target as HTMLInputElement).value)"
        >
          <slot name="placeholder-override">
            <option v-if="placeholder" :disabled="required && Boolean(options.length)" value="">{{ placeholder }}</option>
          </slot>
          <option v-for="(option, index) in options" :key="index" :disabled="option.disabled" :label="option.label" :value="option.value">
            {{ option.text }}
          </option>
        </select>
      </slot>
      <slot name="append"></slot>
    </div>
    <slot name="after"></slot>
  </div>
</template>
