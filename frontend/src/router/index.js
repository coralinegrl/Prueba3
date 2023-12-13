import { createRouter, createWebHashHistory } from 'vue-router'
import PostList from '../views/PostList.vue';


const routes = [
  {
    path: '/',
    name: 'PostList',
    component: PostList
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
