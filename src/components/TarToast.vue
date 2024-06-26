<script setup lang="ts">
import { Toast } from "bootstrap";
import { computed, onMounted, watch } from "vue";
import { nanoid } from "nanoid";
import { parsingUtils } from "logitar-js";

import type { ToastOptions } from "../types/TarToasts";

const { parseBoolean, parseNumber } = parsingUtils;

const props = withDefaults(defineProps<ToastOptions>(), {
  close: "Close",
});

const classes = computed<string[]>(() => {
  const classes = ["toast"];
  if (parseBoolean(props.solid)) {
    classes.push("toast-solid");
  }
  if (props.variant) {
    classes.push(`toast-${props.variant}`);
  }
  return classes;
});
const toastId = computed<string>(() => props.id ?? nanoid());

const emit = defineEmits<{
  /**
   * The toast has been hidden.
   */
  (e: "hidden"): void;
}>();

function initialize(): void {
  const element = document.getElementById(toastId.value);
  if (element) {
    element.addEventListener("hidden.bs.toast", () => emit("hidden"));

    const delay = parseNumber(props.duration) || 0;
    const toast = Toast.getOrCreateInstance(element, {
      animation: parseBoolean(props.fade),
      autohide: delay > 0,
      delay,
    });
    toast.show();
  }
}
onMounted(initialize);
watch(() => props.duration, initialize);
watch(() => props.fade, initialize);
</script>

<template>
  <div :class="classes" :id="toastId" role="alert" aria-live="assertive" aria-atomic="true">
    <slot name="header">
      <div class="toast-header">
        <slot name="title-override">
          <strong class="me-auto">{{ title }}</strong>
        </slot>
        <button type="button" class="btn-close" data-bs-dismiss="toast" :aria-label="close"></button>
      </div>
    </slot>
    <slot name="body">
      <div v-if="html" class="toast-body" v-html="html"></div>
      <div v-else class="toast-body">
        <slot>{{ text }}</slot>
      </div>
    </slot>
  </div>
</template>

<style scoped>
.toast.toast-primary {
  background-color: rgba(230, 242, 255, 0.85);
  border-color: rgba(184, 218, 255, 0.85);
  color: #004085;
}
.toast.toast-primary.toast-solid {
  background-color: #e6f2ff;
}
.toast.toast-primary .toast-header {
  color: #004085;
  background-color: rgba(204, 229, 255, 0.85);
  border-bottom-color: rgba(184, 218, 255, 0.85);
}

.toast.toast-secondary {
  background-color: rgba(239, 240, 241, 0.85);
  border-color: rgba(214, 216, 219, 0.85);
  color: #383d41;
}
.toast.toast-secondary.toast-solid {
  background-color: #eff0f1;
}
.toast.toast-secondary .toast-header {
  color: #383d41;
  background-color: rgba(226, 227, 229, 0.85);
  border-bottom-color: rgba(214, 216, 219, 0.85);
}

.toast.toast-success {
  background-color: rgba(230, 245, 233, 0.85);
  border-color: rgba(195, 230, 203, 0.85);
  color: #155724;
}
.toast.toast-success.toast-solid {
  background-color: #e6f5e9;
}
.toast.toast-success .toast-header {
  color: #155724;
  background-color: rgba(212, 237, 218, 0.85);
  border-bottom-color: rgba(195, 230, 203, 0.85);
}

.toast.toast-danger {
  background-color: rgba(252, 237, 238, 0.85);
  border-color: rgba(245, 198, 203, 0.85);
  color: #721c24;
}
.toast.toast-danger.toast-solid {
  background-color: #fcedee;
}
.toast.toast-danger .toast-header {
  color: #721c24;
  background-color: rgba(248, 215, 218, 0.85);
  border-bottom-color: rgba(245, 198, 203, 0.85);
}

.toast.toast-warning {
  background-color: rgba(255, 249, 231, 0.85);
  border-color: rgba(255, 238, 186, 0.85);
  color: #856404;
}
.toast.toast-warning.toast-solid {
  background-color: #fff9e7;
}
.toast.toast-warning .toast-header {
  color: #856404;
  background-color: rgba(255, 243, 205, 0.85);
  border-bottom-color: rgba(255, 238, 186, 0.85);
}

.toast.toast-info {
  background-color: rgba(229, 244, 247, 0.85);
  border-color: rgba(190, 229, 235, 0.85);
  color: #0c5460;
}
.toast.toast-info.toast-solid {
  background-color: #e5f4f7;
}
.toast.toast-info .toast-header {
  color: #0c5460;
  background-color: rgba(209, 236, 241, 0.85);
  border-bottom-color: rgba(190, 229, 235, 0.85);
}

.toast.toast-light {
  background-color: hsla(0, 0%, 100%, 0.85);
  border-color: rgba(253, 253, 254, 0.85);
  color: #818182;
}
.toast.toast-light.toast-solid {
  background-color: #fff;
}
.toast.toast-light .toast-header {
  color: #818182;
  background-color: hsla(0, 0%, 99.6%, 0.85);
  border-bottom-color: rgba(253, 253, 254, 0.85);
}

.toast.toast-dark {
  background-color: rgba(227, 229, 229, 0.85);
  border-color: rgba(198, 200, 202, 0.85);
  color: #1b1e21;
}
.toast.toast-dark.toast-solid {
  background-color: #e3e5e5;
}
.toast.toast-dark .toast-header {
  color: #1b1e21;
  background-color: rgba(214, 216, 217, 0.85);
  border-bottom-color: rgba(198, 200, 202, 0.85);
}
</style>
