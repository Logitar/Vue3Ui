<script setup lang="ts">
import { computed, ref } from "vue";

import type { InputOptions } from "@/types/TarInput";
import { parseBoolean, parseNumber } from "@/helpers/parsingUtils";

const props = defineProps<InputOptions>();

const inputRef = ref<HTMLInputElement>();

const classes = computed<string[]>(() => {
  const classes: string[] = [];
  if (props.type === "range") {
    classes.push("form-range");
  } else if (parseBoolean(props.readonly) && parseBoolean(props.plaintext)) {
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
    <slot v-if="!parseBoolean(floating)" name="label-override">
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
      <div v-if="parseBoolean(floating)" class="form-floating">
        <slot>
          <input
            :aria-describedby="describedBy"
            :class="classes"
            :disabled="parseBoolean(disabled)"
            :id="id"
            :maxlength="maxLength"
            :max="maxValue"
            :minlength="minLength"
            :min="minValue"
            :name="name"
            :pattern="pattern"
            :placeholder="placeholder"
            :readonly="parseBoolean(readonly)"
            ref="inputRef"
            :required="parseBoolean(required)"
            :step="inputStep"
            :type="type"
            :value="modelValue"
            @input="$emit('update:model-value', ($event.target as HTMLInputElement).value)"
          />
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
        <input
          :aria-describedby="describedBy"
          :class="classes"
          :disabled="parseBoolean(disabled)"
          :id="id"
          :maxlength="maxLength"
          :max="maxValue"
          :minlength="minLength"
          :min="minValue"
          :name="name"
          :pattern="pattern"
          :placeholder="placeholder"
          :readonly="parseBoolean(readonly)"
          ref="inputRef"
          :required="parseBoolean(required)"
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
