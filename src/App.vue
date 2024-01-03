<script setup lang="ts">
import { ref } from "vue";

import TarButton from "@/components/TarButton.vue";
import TarToaster from "./components/TarToaster.vue";

const toaster = ref();

function onClick(): void {
  if (toaster.value) {
    toaster.value.toast({
      duration: 15 * 1000,
      fade: true,
      text: "Hello World!",
      title: "Message",
      variant: "info",
    });
  }
}

function onError(): void {
  throw new Error("Oops! Something happened...");
}
</script>

<template>
  <main class="container">
    <h1>Home</h1>
    <div class="mb-3">
      <TarButton class="me-2" text="Message" @click="onClick" />
      <TarButton text="Error" variant="danger" @click="onError" />
    </div>
    <TarToaster ref="toaster" />
  </main>
</template>
