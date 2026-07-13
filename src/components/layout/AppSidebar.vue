<script setup>

import { Home, CheckSquare, Sparkles } from 'lucide-vue-next'
import { useUserStore } from '@/stores/user'

const user = useUserStore()

</script>


<template>

<aside class="sidebar">


    <div class="sidebar-logo">

        <Sparkles :size="22" />

        <h2>Momentum</h2>

    </div>



    <nav class="sidebar-menu">


        <RouterLink
            to="/dashboard"
            class="sidebar-link"
        >

            <Home :size="18" />

            <span>Dashboard</span>

        </RouterLink>



        <RouterLink
            to="/dashboard/tasks"
            class="sidebar-link"
        >

            <CheckSquare :size="18" />

            <span>Tarefas</span>

        </RouterLink>


    </nav>



    <div class="sidebar-user">


        <div class="user-avatar">

            {{ user.username ? user.username[0].toUpperCase() : "U" }}

        </div>



        <div class="user-info">


            <strong>
                {{ user.username || "Usuário" }}
            </strong>


            <span>
                {{ user.email || "usuario@email.com" }}
            </span>


        </div>


    </div>


</aside>

</template>