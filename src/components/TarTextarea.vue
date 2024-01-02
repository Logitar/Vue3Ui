<script setup lang="ts">
import { computed, ref } from "vue";

import type { TextareaOptions } from "@/types/TarTextarea";
import { parseBoolean, parseNumber } from "@/helpers/parsingUtils";

const props = defineProps<TextareaOptions>();
const textareaRef = ref<HTMLTextAreaElement>();

const classes = computed<string[]>(() => {
  const classes: string[] = [];
  if (parseBoolean(props.readonly) && parseBoolean(props.plaintext)) {
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
    <slot v-if="!parseBoolean(floating)" name="label-override">
      <label v-if="label" :for="id" class="form-label">
        {{ label }}
        <slot name="label-required" v-if="parseBoolean(required)">
          <span class="text-danger">*</span>
        </slot>
      </label>
    </slot>
    <slot name="before"></slot>
    <div v-if="parseBoolean(floating)" class="form-floating">
      <slot>
        <textarea
          :aria-describedby="describedBy"
          :class="classes"
          :cols="parseNumber(cols)"
          :disabled="parseBoolean(disabled)"
          :id="id"
          :maxlength="parseNumber(props.max) || undefined"
          :minlength="parseNumber(props.min) || undefined"
          :name="name"
          :placeholder="placeholder"
          :readonly="parseBoolean(readonly)"
          ref="textareaRef"
          :required="parseBoolean(required)"
          :style="{ height }"
          :value="modelValue"
          @input="$emit('update:model-value', ($event.target as HTMLTextAreaElement).value)"
        >
        </textarea>
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
      <textarea
        :aria-describedby="describedBy"
        :class="classes"
        :cols="parseNumber(cols)"
        :disabled="parseBoolean(disabled)"
        :id="id"
        :maxlength="parseNumber(props.max) || undefined"
        :minlength="parseNumber(props.min) || undefined"
        :name="name"
        :placeholder="placeholder"
        :readonly="parseBoolean(readonly)"
        ref="textareaRef"
        :required="parseBoolean(required)"
        :rows="parseNumber(rows)"
        :value="modelValue"
        @input="$emit('update:model-value', ($event.target as HTMLTextAreaElement).value)"
      >
      </textarea>
    </slot>
    <slot name="after"></slot>
  </div>
</template>
