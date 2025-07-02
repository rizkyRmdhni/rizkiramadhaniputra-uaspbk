<script setup>
import Sidebar from '@/components/Sidebar.vue';
</script>

<template>
  <Sidebar />
  <div class="flex justify-center items-center ml-64">
    <router-view />
  </div>
</template>

<style scoped></style>
