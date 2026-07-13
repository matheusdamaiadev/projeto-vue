<script setup>

import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import BaseInput from '@/components/ui/BaseInput.vue'


const router = useRouter()

const user = useUserStore()


function login() {

  user.login()

  router.push('/dashboard')

}

</script>


<template>

  <div class="auth-container">


    <div class="auth-card">


      <h1>Momentum</h1>


      <p>Entre na sua conta</p>



      <BaseInput
        type="email"
        placeholder="Email"
      />



      <BaseInput
        type="password"
        placeholder="Senha"
      />



      <button @click="login">

        Entrar

      </button>



      <RouterLink to="/register">

        Criar conta

      </RouterLink>


    </div>


  </div>

</template>