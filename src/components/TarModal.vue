<script setup lang="ts">
import { Modal } from "bootstrap";
import { computed, onMounted, ref } from "vue";
import { nanoid } from "nanoid";

const props = withDefaults(
  defineProps<{
    /**
     * The close label for accessibility.
     */
    close?: string;
    /**
     * The unique identifier of the modal.
     */
    id?: string;
    /**
     * The title that will appear in the toast header.
     */
    title?: string;
  }>(),
  {
    close: "Close",
  },
);

const modal = ref<Modal>();

const modalId = computed<string>(() => props.id ?? nanoid());
const labelId = computed<string>(() => `${modalId.value}-label`);

function hide(): void {
  modal.value?.hide();
}
function show(): void {
  modal.value?.show();
}
function toggle(): void {
  modal.value?.toggle();
}
defineExpose({ hide, show, toggle });

onMounted(() => (modal.value = new Modal(`#${modalId.value}`)));
</script>

<template>
  <div class="modal fade" :id="modalId" tabindex="-1" :aria-labelledby="labelId" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 v-if="title" class="modal-title fs-5" :id="labelId">{{ title }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" :aria-label="close"></button>
          <slot name="title-override"></slot>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>
