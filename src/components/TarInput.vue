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
     * The type of the input.
     */
    type?: InputType;
  }>(),
  {
    disabled: false,
    readonly: false,
    type: "text",
  },
);

const inputRef = ref<HTMLInputElement>();

const classes = computed<string[]>(() => {
  const classes = ["form-control"];
  // if (!props.noState && (meta.dirty || meta.touched)) {
  //   classes.push(meta.valid ? "is-valid" : "is-invalid");
  // } // TODO(fpion): implement
  return classes;
});

function focus(): void {
  inputRef.value?.focus();
}
defineExpose({ focus });

// max/min: date, month, week, time, datetime-local, number, range
// maxlength/minlength: text, search, url, tel, email, password
// name
// pattern
// required
// size: text, search, url, tel, email, password
// step: date, month, week, time, datetime-local, number, range
// value: all except image
</script>

<template>
  <div class="mb-3">
    <label v-if="label" :for="id" class="form-label">
      <!-- TODO(fpion): inline? nolabel? -->
      <!-- <template v-if="required"><span class="text-danger">*</span></template> {{ t(label) }} -->
      {{ label }}
    </label>
    <slot name="before"></slot>
    <div class="input-group">
      <slot name="prepend"></slot>
      <slot>
        <!-- <input
        :max="inputMax"
        :min="inputMin"
        :step="type === 'number' ? step : undefined"
        :value="value"
        v-on="validationListeners"
      /> -->
        <input :class="classes" :disabled="disabled" :id="id" :name="name" :placeholder="placeholder" :readonly="readonly" ref="inputRef" :type="type" />
      </slot>
      <slot name="append"></slot>
    </div>
    <slot name="after"></slot>
    <!-- <div v-if="errorMessage" class="invalid-feedback">{{ errorMessage }}</div> -->
  </div>
</template>
