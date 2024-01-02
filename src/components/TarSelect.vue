<script setup lang="ts">
import { computed, ref } from "vue";

import type { SelectOptions } from "@/types/TarSelect";
import { parseBoolean } from "@/helpers/parsingUtils";

const props = withDefaults(defineProps<SelectOptions>(), {
  options: () => [],
});

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

/**
 * Focuses the select element.
 */
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
        <slot name="label-required" v-if="parseBoolean(required)">
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
            :disabled="parseBoolean(disabled)"
            :id="id"
            :multiple="parseBoolean(multiple)"
            :name="name"
            ref="selectRef"
            :required="parseBoolean(required)"
            :value="modelValue"
            @input="$emit('update:model-value', ($event.target as HTMLInputElement).value)"
          >
            <slot name="placeholder-override">
              <option v-if="placeholder" :disabled="parseBoolean(required) && options.length > 0" value="">{{ placeholder }}</option>
            </slot>
            <option v-for="(option, index) in options" :key="index" :disabled="option.disabled" :label="option.label" :value="option.value">
              {{ option.text }}
            </option>
          </select>
        </slot>
        <slot name="label-override">
          <label :for="id">
            {{ label }}
            <slot name="label-required" v-if="parseBoolean(required)">
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
          :disabled="parseBoolean(disabled)"
          :id="id"
          :multiple="parseBoolean(multiple)"
          :name="name"
          ref="selectRef"
          :required="parseBoolean(required)"
          :value="modelValue"
          @input="$emit('update:model-value', ($event.target as HTMLInputElement).value)"
        >
          <slot name="placeholder-override">
            <option v-if="placeholder" :disabled="parseBoolean(required) && options.length > 0" value="">{{ placeholder }}</option>
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
