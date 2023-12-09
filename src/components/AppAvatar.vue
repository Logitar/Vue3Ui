<script setup lang="ts">
import md5 from "md5";
import { computed } from "vue";

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
     * The height of the avatar, in pixels.
     */
    size?: number;
    /**
     * The URL of the picture to display in the avatar.
     */
    url?: string;
  }>(),
  {
    size: 32,
  },
);

const alt = computed<string | undefined>(() => (props.displayName ? `${props.displayName}'s Avatar` : undefined));
const src = computed<string | undefined>(() => {
  if (props.url) {
    return props.url;
  } else if (props.emailAddress) {
    return `https://www.gravatar.com/avatar/${md5(props.emailAddress)}`;
  }
  return undefined;
});
</script>

<template>
  <span>
    <img v-if="src" class="rounded-circle" :src="src" :alt="alt" :height="size" />
  </span>
</template>
