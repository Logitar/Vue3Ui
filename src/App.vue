<script setup lang="ts">
import { computed, onMounted, onUpdated, ref } from "vue";
import { nanoid } from "nanoid";

import AppDelete from "./components/demo/AppDelete.vue";
import TarButton from "./components/TarButton.vue";
import TarInput from "./components/TarInput.vue";
import TarToaster from "./components/TarToaster.vue";
import type { InputStatus } from "./types/TarInput";
import { registerTooltips } from "./helpers/tooltipUtils";
import { useToastStore } from "./stores/toast";

const store = useToastStore();

const emailAddress = ref<string>("");
const isDeleting = ref<boolean>(false);
const isTouched = ref<boolean>(false);

const status = computed<InputStatus | undefined>(() => (isTouched.value ? (emailAddress.value ? "valid" : "invalid") : undefined));

function reset(): void {
  emailAddress.value = "";
  isTouched.value = false;
}

function onSubmit(): void {
  isTouched.value = true;
  if (emailAddress.value) {
    store.add({
      duration: 15 * 1000,
      fade: true,
      id: nanoid(),
      text: `Hello ${emailAddress.value}!`,
      title: "Message",
      variant: "info",
    });
    reset();
  }
}

function onDelete(hideModal: () => void): void {
  if (!isDeleting.value) {
    isDeleting.value = true;
    setTimeout(() => {
      reset();
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

function onEmailAddressUpdate(value?: string): void {
  isTouched.value = true;
  emailAddress.value = value ?? "";
}

function onError(): void {
  throw new Error("Oops! Something happened…");
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
        :model-value="emailAddress"
        name="email_address"
        placeholder="Email Address"
        required="  LABEL  "
        :status="status"
        type="email"
        @update:model-value="onEmailAddressUpdate"
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
