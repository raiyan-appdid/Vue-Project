<script setup>
import { ref } from 'vue';
// import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Example from '/src/components/example.vue';

const listItems = ref([]);
async function getData() {
    // const res = await fetch("http://localhost:3000/all");
    // const finalRes = await res.json();

    axios.get("http://localhost:3000/all").then((result) => {
        listItems.value = result.data;
    })

    // listItems.value = finalRes;
}
getData();



</script>


<template>
    <!-- <h2>Api Page</h2> -->

    <Example />
    <!-- <div class="container" v-for="myValues in listItems ">{{ myValues.title }}</div> -->
</template>