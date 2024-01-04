<template>
  <div class="upload">
    <form @submit="onSubmit" method="post" enctype="multipart/form-data">
      <h1>Create a Post</h1>
      <div>
        <div>
          <label for="title">Title</label>
          <input type="text" name="title" id="title" v-model="post.title" />
        </div>
        <div>
          <label for="content">Content</label>
          <textarea
            name="content"
            id="content"
            cols="30"
            rows="10"
            v-model="post.content"
          ></textarea>
        </div>
        <div>
          <label for="image">Image</label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/png, image/jpeg, image/jpg"
            @change="onSelect"
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import store from '../store/index.js'
import router from '@/router/index.js'

const post = ref({
  title: '',
  content: '',
  image: ''
})

const onSelect = (e) => {
  post.value.image = e.target.files[0]
}

const onSubmit = (e) => {
  e.preventDefault()
  const formData = new FormData()
  formData.append('title', post.value.title)
  formData.append('content', post.value.content)
  formData.append('image', post.value.image)

  store.dispatch('createPost', formData)
  router.push('/posts')

  // fetch('http://localhost:3000/api/posts', {
  //   method: 'POST',
  //   body: formData
  // })
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data)
  //   })
  //   .catch((err) => console.log(err))
}
</script>

<style scoped>
.upload {
  background-color: #0c1535;
  height: 100vh;
  color: #fff;
  display: flex;
  justify-content: center;
  padding: 100px 0;
}

label {
  display: block;
  margin-bottom: 10px;
  width: 100%;
  margin-top: 10px;
}

input[type='text'],
input[type='file'] {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #fff;
  background-color: #0c1535;
  color: #fff;
}

textarea {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #fff;
  background-color: #0c1535;
  color: #fff;
  resize: none;
}

button {
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid #fff;
  background-color: #0c1535;
  color: #fff;
  cursor: pointer;
  margin: 10px auto;
}

form {
  min-width: 600px;
  border: 2px solid #fff;
  padding: 20px;
  border-radius: 10px;
}
</style>
