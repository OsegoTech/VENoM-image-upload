<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <h1>Tutorial to Upload and View Images using the Venom Stack</h1>
    <div>
      <p>
        This tutorial will show you how to upload and view images using the Venom Stack. The Venom
        Stack is a full stack web development framework that uses Vue.js, Express.js, Node.js, and
        MongoDB. The Venom Stack is a great way to get started with full stack web development.
      </p>
    </div>
    <div>
      <RouterLink to="/upload">Upload an Image</RouterLink>
      <RouterLink to="/view">View Images</RouterLink>
    </div>
  </main>
</template>
