import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UploadFormVue from '@/views/UploadForm.vue'
import PostsViewVue from '@/views/PostsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/upload',
      name: 'upload',
      component: UploadFormVue
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostsViewVue
    },
    {
      path: '/:catchAll(.*)',
      name: 'notFound',
      component: HomeView
    }
  ]
})

export default router
