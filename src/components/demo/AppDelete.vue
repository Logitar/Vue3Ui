<script setup lang="ts">
import { computed, ref } from "vue";
import { nanoid } from "nanoid";

import TarButton from "../TarButton.vue";
import TarModal from "../TarModal.vue";

const props = withDefaults(
  defineProps<{
    confirm: string;
    disabled?: boolean;
    displayName: string;
    id?: string;
    loading?: boolean;
    title: string;
  }>(),
  {
    id: () => nanoid(),
  },
);

const modalRef = ref<InstanceType<typeof TarModal> | null>(null);

const modalId = computed<string>(() => `delete-modal_${props.id}`);

function hide(): void {
  modalRef.value?.hide();
}

defineEmits<{
  (e: "confirmed", callback: () => void): void;
}>();
</script>

<template>
  <span>
    <TarButton
      :disabled="disabled"
      icon="fas fa-trash-can"
      :loading="loading"
      text="Delete"
      variant="danger"
      data-bs-toggle="modal"
      :data-bs-target="`#${modalId}`"
    />
    <TarModal :id="modalId" ref="modalRef" :title="title">
      <p>
        {{ confirm }}
        <br />
        <span class="text-danger">{{ displayName }}</span>
      </p>
      <template #footer>
        <TarButton icon="fas fa-ban" text="Cancel" variant="secondary" @click="hide" />
        <TarButton
          :disabled="loading"
          icon="fas fa-trash-can"
          :loading="loading"
          status="Loading…"
          text="Delete"
          variant="danger"
          @click="$emit('confirmed', hide)"
        />
      </template>
    </TarModal>
  </span>
</template>
