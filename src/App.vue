<script setup lang="ts">
import TarButton from "@/components/TarButton.vue";

function onClick(): void {
  alert("Hello World!");
}
</script>

<template>
  <main class="container">
    <h1>Home</h1>
    <TarButton text="Click me!" @click="onClick" />
  </main>
</template>
