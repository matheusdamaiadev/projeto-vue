<script setup>

import { ref } from 'vue'
import SearchInput from '@/components/ui/SearchInput.vue'

const search = ref('')

</script>


<template>

<header class="header">

    <SearchInput
        v-model="search"
        placeholder="Pesquisar..."
    />

</header>

</template>