<script setup lang="ts">
import { nanoid } from "nanoid";
import { onMounted, onUpdated, ref } from "vue";

import AppDelete from "./components/demo/AppDelete.vue";
import TarButton from "./components/TarButton.vue";
import TarInput from "./components/TarInput.vue";
import TarToaster from "./components/TarToaster.vue";
import { useToastStore } from "./stores/toast";
import { registerTooltips } from "./helpers/tooltipUtils";

const store = useToastStore();

const emailAddress = ref<string>("");
const isDeleting = ref<boolean>(false);

function onSubmit(): void {
  store.add({
    duration: 15 * 1000,
    fade: true,
    id: nanoid(),
    text: `Hello ${emailAddress.value}!`,
    title: "Message",
    variant: "info",
  });
  emailAddress.value = "";
}

function onDelete(hideModal: () => void): void {
  if (!isDeleting.value) {
    isDeleting.value = true;
    setTimeout(() => {
      emailAddress.value = "";
      store.add({
        duration: 15 * 1000,
        fade: true,
        text: "The user has been deleted.",
        title: "Success!",
        variant: "success",
      });
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
    <form @submit.prevent="onSubmit">
      <TarInput
        described-by="email-address-help"
        :disabled="isDeleting"
        floating
        id="email-address"
        label="Email Address"
        min="1"
        max="255"
        name="email_address"
        placeholder="Email Address"
        required
        type="email"
        v-model="emailAddress"
      >
        <template #after>
          <div id="email-address-help" class="form-text">We'll never share your email with anyone else.</div>
        </template>
      </TarInput>
      <div class="mb-3">
        <TarButton class="me-1" :icon="['fas', 'paper-plane']" text="Send message" type="submit" />
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
          confirm="Do you really want to delete the following user?"
          :disabled="isDeleting || !emailAddress"
          :displayName="emailAddress"
          id="delete-user"
          :loading="isDeleting"
          title="Delete user"
          @confirmed="onDelete"
        />
      </div>
    </form>
    <TarToaster :toasts="store.toasts" @hidden="store.remove" />
  </main>
</template>
