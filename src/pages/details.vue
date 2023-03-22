<template>
    <h2 class="text-white">Raiyian {{ $route.params.id }}</h2>
    <!-- <h2 class="text-white">Raiyian {{ listItems[0]['description'] }}</h2> -->

    <form v-on:submit.prevent="updateForm" method="">
        <label for="">Title</label>
        <input type="text" class="form-control"  name="title">
        <label for="">Description</label>
        <input type="text" class="form-control" name="description">
        <button type="submit" class="btn btn-success">Submit</button>
    </form>

    <table class="table table-dark table-bordered">
        <thead>
            <tr>
                <th scope="col">Id</th>
                <th style="width: 30px;" scope="col">Title</th>
                <th style="width: 30px;" scope="col">Description</th>
                <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="values in listItems">
                <th scope="row"> {{ values.id }}</th>
                <th> {{ values.title }}</th>
                <th> {{ values.description }}</th>
                <th> <button v-on:click="deleteUser(values.id)">Delete</button>
                    <router-link class="navbar-logo" :to="`/detail/${values.id}`">Detail</router-link>
                </th>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;
const listItems = ref([]);
details(id)
function details(id) {
    // alert(id)
    let url = `http://localhost:3000/detail/` + id;
    axios.get(url).then((result) => {
        listItems.value = result.data;

    }).catch(err => console.log(err))
}



function updateForm(data) {
    // alert('asdf')
    let title = data.target.elements.title.value
    let description = data.target.elements.description.value

    let url = `http://localhost:3000/update/` + id;
    // alert(url);
    axios.post(url, {
        title: title,
        description: description
    }).then((result) => {
        details(id)

    }).catch(err => console.log(err))
}
</script>