<script setup>

import { Search } from 'lucide-vue-next'

defineProps({

    placeholder:{
        type:String,
        default:"Pesquisar..."
    }

})

const model = defineModel()

</script>


<template>

<div class="search-box">

    <Search :size="18"/>

    <input
        v-model="model"
        :placeholder="placeholder"
    />

</div>

</template>


<style scoped>

.search-box{
    width:320px;
    display:flex;
    align-items:center;
    gap:.8rem;
    padding:.8rem 1rem;
    border:2px solid var(--color-border);
    border-radius:var(--radius);
    background:white;
    transition:.2s ease;
}


.search-box svg{
    color:var(--color-text-secondary);
    transition:.2s ease;
}


.search-box input{
    width:100%;
    border:none;
    outline:none;
    background:transparent;
}


.search-box:focus-within{
    border:2px solid #000;
}


.search-box:focus-within svg{
    color:#000;
}

</style>