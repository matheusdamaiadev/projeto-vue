<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import BaseInput from '@/components/ui/BaseInput.vue'


const router = useRouter()

const user = useUserStore()


const username = ref('')
const email = ref('')
const password = ref('')



function register() {

  user.register({

    username: username.value,
    email: email.value

  })


  router.push('/login')

}

</script>


<template>

  <div class="auth-container">


    <div class="auth-card">


      <h1>Momentum</h1>


      <p>Crie sua conta</p>



      <BaseInput

        v-model="username"

        placeholder="Nome"

      />



      <BaseInput

        v-model="email"

        type="email"

        placeholder="Email"

      />



      <BaseInput

        v-model="password"

        type="password"

        placeholder="Senha"

      />



      <button @click="register">

        Criar conta

      </button>



      <RouterLink to="/login">

        Já possui uma conta?

      </RouterLink>


    </div>


  </div>

</template>