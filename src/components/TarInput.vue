<script setup lang="ts">
import { computed, ref } from "vue";

import type { InputSize, InputType } from "@/types/components/TarInput";
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
     * For textual inputs (text, search, url, tel, email, and password), this is the maximum length in characters of a valid value.
     * For numeric inputs (number and range), this is the maximum valid numeral value.
     * For date inputs, this is the maximum date, using the `YYYY-MM-DD` format.
     * For time inputs, this is the maximum time, using the `HH:MM` format.
     * For month inputs, this is the maximum month, using the `YYYY-MM` format.
     * For week inputs, this is the maximum week, using the `YYYY-WNN` format, NN being the week number.
     * For datetime-local inputs, this is the maximum moment, using the `YYYY-MM-DDTHH:mm` format.
     */
    max?: number | string;
    /**
     * For textual inputs (text, search, url, tel, email, and password), this is the minimum length in characters of a valid value.
     * For numeric inputs (number and range), this is the minimum valid numeral value.
     * For date inputs, this is the minimum date, using the `YYYY-MM-DD` format.
     * For time inputs, this is the minimum time, using the `HH:MM` format.
     * For month inputs, this is the minimum month, using the `YYYY-MM` format.
     * For week inputs, this is the minimum week, using the `YYYY-WNN` format, NN being the week number.
     * For datetime-local inputs, this is the minimum moment, using the `YYYY-MM-DDTHH:mm` format.
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
     * The regular expression a valid value must match. Only textual inputs (text, search, url, tel, email, and password) support this property.
     */
    pattern?: string;
    /**
     * This text will appear inside the input when no value has been set. Only textual and number inputs (number, text, search, url, tel, email, and password) support this property.
     */
    placeholder?: string;
    /**
     * When the input is readonly, this will display the value as text instead of an input, preserving margin and padding, but removing form field styling.
     */
    plaintext?: boolean;
    /**
     * The value of the input will not be editable.
     */
    readonly?: boolean;
    /**
     * The input is required to submit the form its contained into.
     */
    required?: boolean;
    /**
     * The size of the input.
     */
    size?: InputSize;
    /**
     * The value of each increase or decrease when using a numeric input (number and range).
     * For date/time inputs (date, time, month, week, and datetime-local), the value can be a number or "any". Its interpretation depends on the input type, so please consult documentation about inputs if you are unsure about how to use the step for those input types.
     */
    step?: number | string;
    /**
     * The type of the input.
     */
    type?: InputType;
  }>(),
  {
    disabled: false,
    inline: false,
    plaintext: false,
    readonly: false,
    required: false,
    type: "text",
  },
);

const inputRef = ref<HTMLInputElement>();

const classes = computed<string[]>(() => {
  const classes: string[] = [];
  if (props.type === "range") {
    classes.push("form-range");
  } else if (props.readonly && props.plaintext) {
    classes.push("form-control-plaintext");
  } else {
    classes.push("form-control");
  }
  switch (props.size) {
    case "large":
      classes.push("form-control-lg");
      break;
    case "small":
      classes.push("form-control-sm");
      break;
  }
  return classes;
});

const isDateTimeInput = computed<boolean>(() => {
  switch (props.type) {
    case "date":
    case "datetime-local":
    case "month":
    case "time":
    case "week":
      return true;
  }
  return false;
});
const isNumericInput = computed<boolean>(() => {
  switch (props.type) {
    case "number":
    case "range":
      return true;
  }
  return false;
});
const isTextualInput = computed<boolean>(() => {
  switch (props.type) {
    case "email":
    case "password":
    case "search":
    case "tel":
    case "text":
    case "url":
    case undefined:
      return true;
  }
  return false;
});
const maxLength = computed<number | undefined>(() => {
  return isTextualInput.value ? parseNumber(props.max) || undefined : undefined;
});
const maxValue = computed<number | string | undefined>(() => {
  if (isNumericInput.value) {
    return parseNumber(props.max);
  } else if (isDateTimeInput.value) {
    return props.max;
  }
  return undefined;
});
const minLength = computed<number | undefined>(() => {
  return isTextualInput.value ? parseNumber(props.min) || undefined : undefined;
});
const minValue = computed<number | string | undefined>(() => {
  if (isNumericInput.value) {
    return parseNumber(props.min);
  } else if (isDateTimeInput.value) {
    return props.min;
  }
  return undefined;
});
const inputStep = computed<number | string | undefined>(() => {
  if (isNumericInput.value) {
    return parseNumber(props.step);
  } else if (isDateTimeInput.value) {
    const step = typeof props.step === "string" ? props.step.trim() : props.step;
    return step === "any" ? step : parseNumber(step);
  }
  return undefined;
});

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
          :max="maxValue"
          :minlength="minLength"
          :min="minValue"
          :name="name"
          :pattern="pattern"
          :placeholder="placeholder"
          :readonly="readonly"
          ref="inputRef"
          :required="required"
          :step="inputStep"
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
