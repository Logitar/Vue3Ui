<script setup lang="ts">
import md5 from "md5";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { computed } from "vue";

import TarBadge from "./TarBadge.vue";
import type { BadgeVariant } from "@/types/components/TarBadge";

const props = withDefaults(
  defineProps<{
    /**
     * The display name of the user or actor, used in the image replacement text.
     */
    displayName?: string;
    /**
     * The email address of the user, used to load its Gravatar if `url` is falsy.
     */
    emailAddress?: string;
    /**
     * The Font Awesome icon to display.
     */
    icon?: string | string[];
    /**
     * The height of the avatar, in pixels.
     */
    size?: number | string;
    /**
     * The URL of the picture to display in the avatar.
     */
    url?: string;
    /**
     * The color variant of the badge, when displaying an icon.
     */
    variant?: BadgeVariant;
  }>(),
  {
    icon: "fas fa-user",
    size: 32,
    variant: "secondary",
  },
);

const alt = computed<string | undefined>(() => (props.displayName ? `${props.displayName}'s Avatar` : undefined));
const height = computed<number | undefined>(() => {
  if (typeof props.size === "number" && props.size > 0) {
    return props.size;
  } else if (typeof props.size === "string") {
    const height = Number(props.size.trim());
    if (!isNaN(height) && height > 0) {
      return height;
    }
  }
  return undefined;
});
const src = computed<string | undefined>(() => {
  if (props.url) {
    return props.url;
  } else if (props.emailAddress) {
    return `https://www.gravatar.com/avatar/${md5(props.emailAddress)}`;
  }
  return undefined;
});
const style = computed(() => {
  return height.value ? { width: `${height.value}px`, height: `${height.value}px` } : undefined;
});
</script>

<template>
  <span>
    <img v-if="src" class="rounded-circle" :src="src" :alt="alt" :height="height" />
    <TarBadge v-else-if="icon" class="rounded-circle" :style="style" :variant="variant">
      <FontAwesomeIcon :icon="icon" />
    </TarBadge>
  </span>
</template>

<style scoped>
.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  flex-shrink: 0;
  font-size: inherit;
  font-weight: 400;
  line-height: 1;
  max-width: 100%;
  text-align: center;
  overflow: visible;
  position: relative;
  transition:
    color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}
</style>
