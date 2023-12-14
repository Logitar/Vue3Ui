<script setup lang="ts">
import TarCard from "./components/TarCard.vue";
</script>

<template>
  <main class="container">
    <h1>Hello World!</h1>
    <TarCard title="Francis Pion" subtitle="Architecte logiciel">
      <template #header>
        <div class="card-header">Featured</div>
      </template>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="card-link">Go somewhere</a>
      <a href="#" class="card-link">Go nowhere</a>
      <template #footer>
        <div class="card-footer text-body-secondary">2 days ago</div>
      </template>
    </TarCard>
  </main>
</template>
