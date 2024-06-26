import { defineStore } from "pinia";
import { ref } from "vue";

import type { ToastOptions } from "../types/TarToasts";

export const useToastStore = defineStore("toast", () => {
  const toasts = ref<ToastOptions[]>([]);

  function add(toast: ToastOptions): void {
    toasts.value.push(toast);
  }
  function remove(toast: ToastOptions): void {
    const index = toasts.value.findIndex(({ id }) => id === toast.id);
    if (index >= 0) {
      toasts.value.splice(index, 1);
    }
  }

  return { toasts, add, remove };
});
