<script setup lang="ts">
import { nanoid } from "nanoid";

import TarButton from "@/components/TarButton.vue";
import TarToaster from "./components/TarToaster.vue";
import { useToastStore } from "@/stores/toast";

const store = useToastStore();

function onClick(): void {
  store.add({
    duration: 15 * 1000,
    fade: true,
    id: nanoid(),
    text: "Hello World!",
    title: "Message",
    variant: "info",
  });
}

function onError(): void {
  throw new Error("Oops! Something happened...");
}
</script>

<template>
  <main class="container">
    <h1>Home</h1>
    <div class="mb-3">
      <TarButton class="me-2" :icon="['fas', 'paper-plane']" text="Message" @click="onClick" />
      <TarButton text="Error" :icon="['fas', 'bomb']" variant="danger" @click="onError" />
    </div>
    <TarToaster :toasts="store.toasts" @hidden="store.remove" />
  </main>
</template>
