<script setup lang="ts">
import { computed, ref } from "vue";

import type { InputType } from "@/types/components/TarInput";
import { parseNumber } from "@/helpers/numberUtils";

const props = withDefaults(
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
     * The maximum length (in characters) of a valid value.
     */
    max?: number | string;
    /**
     * The minimum length (in characters) of a valid value.
     */
    min?: number | string;
    /**
     * The value of the field.
     */
    modelValue?: string;
    /**
     * The name of the input, used when submitting forms.
     */
    name?: string;
    /**
     * The regular expression a valid value must match.
     */
    pattern?: string;
    /**
     * This text will appear inside the input when no value has been set.
     */
    placeholder?: string;
    /**
     * The value of the input will not be editable.
     */
    readonly?: boolean;
    /**
     * The input is required to submit the form its contained into.
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

const isTextualInput = computed<boolean>(() => ["text", "search", "url", "tel", "email", "password"].includes(props.type ?? "text"));
const inputPattern = computed<string | undefined>(() => (isTextualInput.value ? props.pattern : undefined));
const inputPlaceholder = computed<string | undefined>(() => (isTextualInput.value /*|| props.type === "number"*/ ? props.placeholder : undefined)); // TODO(fpion): handle number inputs
const maxLength = computed<number | undefined>(() => (isTextualInput.value ? parseNumber(props.max) || undefined : undefined));
const minLength = computed<number | undefined>(() => (isTextualInput.value ? parseNumber(props.min) || undefined : undefined));

function focus(): void {
  inputRef.value?.focus();
}
defineExpose({ focus });

defineEmits<{
  /**
   * The input value has been updated.
   */
  (e: "update:model-value", value?: string): void;
}>();
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
          :maxlength="maxLength"
          :minlength="minLength"
          :name="name"
          :pattern="inputPattern"
          :placeholder="inputPlaceholder"
          :readonly="readonly"
          ref="inputRef"
          :required="required"
          :type="type"
          :value="modelValue"
          @input="$emit('update:model-value', ($event.target as HTMLInputElement).value)"
        />
      </slot>
      <slot name="append"></slot>
    </div>
    <slot name="after"></slot>
  </div>
</template>
