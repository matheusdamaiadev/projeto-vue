import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'


const router = createRouter({

  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [

    {
      path: '/',
      redirect: '/login'
    },

    {
      path: '/login',
      name: 'login',
      component: LoginView
    },

    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },

    {
      path:'/dashboard',
      component: () => import('@/layouts/DashboardLayout.vue'),
      children:[
        {
          path:'',
          component: () => import('@/views/HomeView.vue')
        },

        {
          path:'tasks',
          component: () => import('@/views/TasksView.vue')
        }
      ]
    }

  ]

})


export default router