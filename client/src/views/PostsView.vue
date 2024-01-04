<template>
  <div class="main">
    <div class="container">
      <h1>Posts</h1>
      <div v-for="post in lists" :key="post._id">
        <div>
          <div class="arrange">
            <div>
              <h2>{{ post.title }}</h2>
              <p>{{ post.title }}</p>
            </div>
            <div>
              <img :src="getImageUrl(post.image)" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import store from '../store/index.js'

onMounted(() => {
  store.dispatch('fetchPosts')
})

const posts = reactive(store.state.posts)
console.log(posts)

const lists = posts.posts
console.log(lists)

// function to generate full image url
const getImageUrl = (imagePath) => {
  return `http://localhost:3000/uploads/${imagePath}`
}
</script>

<style scoped>
.main {
  background-color: aliceblue;
}

.container {
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1rem;
}

.arrange {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

img {
  width: 400px;
  height: 400px;
}
</style>
