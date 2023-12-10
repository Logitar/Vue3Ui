<script setup lang="ts">
import { computed, ref } from "vue";

import type { InputType } from "@/types/components/TarInput";

withDefaults(
  defineProps<{
    /**
     * The input will display with a disabled style and will not react to events.
     */
    disabled?: boolean;
    /**
     * The unique identifier of the input.
     */
    id?: string;
    /**
     * The input will be inline, meaning no label will be displayed. You can use the placeholder instead when using inline inputs.
     */
    inline?: boolean;
    /**
     * The human readable caption of the input.
     */
    label?: string;
    /**
     * The name of the input, used when submitting forms.
     */
    name?: string;
    /**
     * This text will appear inside the input when no value has been set.
     */
    placeholder?: string;
    /**
     * The value of the input will not be editable.
     */
    readonly?: boolean;
    /**
     * The input is required to submit TODO
     */
    required?: boolean;
    /**
     * The type of the input.
     */
    type?: InputType;
  }>(),
  {
    disabled: false,
    inline: false,
    readonly: false,
    required: false,
    type: "text",
  },
);

const inputRef = ref<HTMLInputElement>();

const classes = computed<string[]>(() => {
  const classes = ["form-control"];
  return classes;
});

function focus(): void {
  inputRef.value?.focus();
}
defineExpose({ focus });
</script>

<template>
  <div class="mb-3">
    <slot v-if="!inline" name="label-override">
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
      <slot>
        <input
          :class="classes"
          :disabled="disabled"
          :id="id"
          :name="name"
          :placeholder="placeholder"
          :readonly="readonly"
          ref="inputRef"
          :required="required"
          :type="type"
        />
      </slot>
      <slot name="append"></slot>
    </div>
    <slot name="after"></slot>
  </div>
</template>
