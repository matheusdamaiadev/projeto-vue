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

            <RouterView />

        </main>


    </div>


</div>

</template>