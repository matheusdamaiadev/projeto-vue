<script setup>
import AppSidebar from '@/components/layout/AppSidebar.vue'
import AppHeader from '@/components/layout/AppHeader.vue'
</script>

<template>
  <div class="dashboard-layout">

    <AppSidebar />

    <div class="dashboard-content">

      <AppHeader />

      <main class="dashboard-main">

        <h1>Bem-vindo ao Momentum</h1>

        <p>
          Seu espaço para organizar tarefas, projetos e hábitos.
        </p>

      </main>

    </div>

  </div>
</template>