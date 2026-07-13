<template>

    <input
        class="base-input"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    />

</template>


<script setup>

defineProps({

    type:{
        type:String,
        default:"text"
    },

    placeholder:{
        type:String,
        default:""
    },

    modelValue:{
        type:String,
        default:""
    }

})


defineEmits([
    "update:modelValue"
])

</script>


<style scoped>

.base-input{

    width:100%;

    padding:.9rem 1rem;

    border:2px solid var(--color-border);

    border-radius:var(--radius);

    outline:none;

    background:white;

    transition:.2s ease;

}


.base-input:focus{

    border:2px solid #000;

}


</style>