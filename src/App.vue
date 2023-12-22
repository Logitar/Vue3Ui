<script setup lang="ts">
import { ref } from "vue";

import TarCheckbox from "@/components/TarCheckbox.vue";

const remember = ref<boolean>(false);
</script>

<template>
  <main class="container">
    <h1>Home</h1>
    <p>Remember Me: {{ remember }}</p>
    <TarCheckbox label="Remember Me" switch v-model="remember" />
    <TarCheckbox disabled label="Disabled Checkbox" />
  </main>
</template>
