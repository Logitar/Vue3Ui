<script setup lang="ts">
import { ref } from "vue";

import TarButton from "@/components/TarButton.vue";
import TarToaster from "./components/TarToaster.vue";
import type { ToastOptions } from "./types/TarToasts";
import { nanoid } from "nanoid";

const toasts = ref<Map<string, ToastOptions>>(new Map<string, ToastOptions>());

function onClick(): void {
  const id = nanoid();
  toasts.value.set(id, {
    duration: 15 * 1000,
    fade: true,
    id,
    text: "Hello World!",
    title: "Message",
    variant: "info",
  });
}

function onError(): void {
  throw new Error("Oops! Something happened...");
}

function removeToast(toast: ToastOptions): void {
  if (toast.id) {
    toasts.value.delete(toast.id);
  }
}
</script>

<template>
  <main class="container">
    <h1>Home</h1>
    <div class="mb-3">
      <TarButton class="me-2" text="Message" @click="onClick" />
      <TarButton text="Error" variant="danger" @click="onError" />
    </div>
    <TarToaster :toasts="Array.from(toasts.values())" @hidden="removeToast" />
  </main>
</template>
