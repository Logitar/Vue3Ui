<script setup lang="ts">
import { nanoid } from "nanoid";
import { onMounted, onUpdated, ref } from "vue";

import AppDelete from "./components/demo/AppDelete.vue";
import TarButton from "./components/TarButton.vue";
import TarToaster from "./components/TarToaster.vue";
import { useToastStore } from "./stores/toast";
import { registerTooltips } from "./helpers/tooltipUtils";

const store = useToastStore();

const isDeleting = ref<boolean>(false);

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

function onDelete(hideModal: () => void): void {
  if (!isDeleting.value) {
    isDeleting.value = true;
    setTimeout(() => {
      alert("The object was deleted.");
      hideModal();
      isDeleting.value = false;
    }, 2500);
  }
}

function onError(): void {
  throw new Error("Oops! Something happened...");
}

onMounted(registerTooltips);
onUpdated(registerTooltips);
</script>

<template>
  <main class="container">
    <h1>Home</h1>
    <div class="mb-3">
      <TarButton class="me-1" :icon="['fas', 'paper-plane']" text="Message" @click="onClick" />
      <TarButton
        class="mx-1"
        data-bs-toggle="tooltip"
        data-bs-title="Click this button the test the default error behavior."
        :icon="['fas', 'bomb']"
        text="Error"
        variant="warning"
        @click="onError"
      />
      <AppDelete
        class="ms-1"
        confirm="Do you really want to delete the following object?"
        displayName="Test"
        id="delete-test"
        :loading="isDeleting"
        title="Delete test"
        @confirmed="onDelete"
      />
    </div>
    <TarToaster :toasts="store.toasts" @hidden="store.remove" />
  </main>
</template>
