<script setup lang="ts">
import { computed, ref } from "vue";

import type { TextareaSize } from "@/types/components/TarTextarea";
import { parseNumber } from "@/helpers/numberUtils";

const props = withDefaults(
  defineProps<{
    /**
     * The visible width of the textarea, in average character widths.
     */
    cols?: number | string;
    /**
     * When adding a textarea help text, this is the unique identifier of the form text element. This will specify the `aria-describedby` attribute to ensure assistive technologies will announce the text when the user focuses or enters the control.
     */
    describedBy?: string;
    /**
     * The textarea will display with a disabled style and will not react to events.
     */
    disabled?: boolean;
    /**
     * The label will appear floating in the textarea, moving when the value is modified. The `label` and `placeholder` properties are required for floating labels to function properly.
     */
    floating?: boolean;
    /**
     * The unique identifier of the textarea.
     */
    id?: string;
    /**
     * The human readable caption of the textarea.
     */
    label?: string;
    /**
     * The maximum length in characters of a valid value.
     */
    max?: number | string;
    /**
     * The minimum length in characters of a valid value.
     */
    min?: number | string;
    /**
     * The value of the field.
     */
    modelValue?: string;
    /**
     * The name of the textarea, used when submitting forms.
     */
    name?: string;
    /**
     * This text will appear inside the textarea when no value has been set.
     */
    placeholder?: string;
    /**
     * When the textarea is readonly, this will display the value as text instead of a textarea, preserving margin and padding, but removing form field styling.
     */
    plaintext?: boolean;
    /**
     * The value of the textarea will not be editable.
     */
    readonly?: boolean;
    /**
     * The textarea is required to submit the form its contained into.
     */
    required?: boolean;
    /**
     * The number of visible text lines of the text area.
     */
    rows?: number | string;
    /**
     * The size of the textarea.
     */
    size?: TextareaSize;
  }>(),
  {
    disabled: false,
    plaintext: false,
    readonly: false,
    required: false,
  },
);

const textareaRef = ref<HTMLTextAreaElement>();

const classes = computed<string[]>(() => {
  const classes: string[] = [];
  if (props.readonly && props.plaintext) {
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
const height = computed<string | undefined>(() => {
  const rows = parseNumber(props.rows);
  return rows ? `${rows * 1.5}rem` : undefined;
});

function focus(): void {
  textareaRef.value?.focus();
}
defineExpose({ focus });

defineEmits<{
  /**
   * The textarea value has been updated.
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
    <div v-if="floating" class="form-floating">
      <slot>
        <textarea
          :aria-describedby="describedBy"
          :class="classes"
          :cols="parseNumber(cols)"
          :disabled="disabled"
          :id="id"
          :maxlength="parseNumber(props.max) || undefined"
          :minlength="parseNumber(props.min) || undefined"
          :name="name"
          :placeholder="placeholder"
          :readonly="readonly"
          ref="textareaRef"
          :required="required"
          :style="{ height }"
          :value="modelValue"
          @input="$emit('update:model-value', ($event.target as HTMLTextAreaElement).value)"
        >
        </textarea>
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
      <textarea
        :aria-describedby="describedBy"
        :class="classes"
        :cols="parseNumber(cols)"
        :disabled="disabled"
        :id="id"
        :maxlength="parseNumber(props.max) || undefined"
        :minlength="parseNumber(props.min) || undefined"
        :name="name"
        :placeholder="placeholder"
        :readonly="readonly"
        ref="textareaRef"
        :required="required"
        :rows="parseNumber(rows)"
        :value="modelValue"
        @input="$emit('update:model-value', ($event.target as HTMLTextAreaElement).value)"
      >
      </textarea>
    </slot>
    <slot name="after"></slot>
  </div>
</template>
