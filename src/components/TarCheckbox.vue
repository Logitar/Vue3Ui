<script setup lang="ts">
import { computed, ref } from "vue";

const props = withDefaults(
  defineProps<{
    /**
     * The checkbox will display with a disabled style and will not react to events.
     */
    disabled?: boolean;
    /**
     * The unique identifier of the checkbox.
     */
    id?: string;
    /**
     * The checkbox will be inline, allowing it to be stacked with other checkboxes.
     */
    inline?: boolean;
    /**
     * The human readable caption of the checkbox.
     */
    label?: string;
    /**
     * The value of the checkbox, which is, if it is checked or not.
     */
    modelValue?: boolean;
    /**
     * The name of the checkbox, used when submitting forms.
     */
    name?: string;
    /**
     * The checkbox is required to be checked to submit the form its contained into.
     */
    required?: boolean;
    /**
     * The alignment of the checkbox will be reversed.
     */
    reverse?: boolean;
    /**
     * The checkbox will appear in a switch style instead of a checkbox.
     */
    switch?: boolean;
    /**
     * The value of the checkbox, used when submitting forms.
     */
    value?: string;
  }>(),
  {
    disabled: false,
    inline: false,
    required: false,
    reverse: false,
    switch: false,
  },
);

const inputRef = ref<HTMLInputElement>();

const classes = computed<string[]>(() => {
  const classes = ["form-check"];
  if (props.inline) {
    classes.push("form-check-inline");
  }
  if (props.reverse) {
    classes.push("form-check-reverse");
  }
  if (props.switch) {
    classes.push("form-switch");
  }
  return classes;
});

function focus(): void {
  inputRef.value?.focus();
}
defineExpose({ focus });

defineEmits<{
  /**
   * The checkbox has been checked or unchecked.
   */
  (e: "update:model-value", value: boolean): void;
}>();
</script>

<template>
  <div :class="classes">
    <slot>
      <input
        :checked="modelValue"
        class="form-check-input"
        :disabled="disabled"
        :id="id"
        :name="name"
        ref="inputRef"
        :required="required"
        type="checkbox"
        :value="value"
        @change="$emit('update:model-value', ($event.target as HTMLInputElement).checked)"
      />
    </slot>
    <slot name="label-override">
      <label class="form-check-label" :for="id">
        <template v-if="label">{{ label }}</template>
      </label>
    </slot>
  </div>
</template>
