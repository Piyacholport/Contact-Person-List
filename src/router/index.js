
import { createRouter, createWebHistory } from 'vue-router'
import test from '../views/test.vue'
import PersonList from '../views/PersonList.vue'


const routes = [
  {
    path: '/',
    name: 'PersonList',
    component: PersonList,
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router

