<style>
@import '../../node_modules/toastr/build/toastr.min.css';
/* @import 'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.css'; */

</style>

<template>

    <form v-on:submit.prevent="getFormValues" method="post">
        <input type="text" name="title" v-model="title" id="">
        <input type="text" name="description" v-model="description" id="">
        <button type="submit">Add</button>
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
                    <router-link class="navbar-logo" :to="{ name: 'Detail', params: { id: values.id }}">Detail</router-link>
                </th>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import axios from 'axios';
import VueAxios from 'vue-axios';
import { ref } from 'vue';
import Swal from 'sweetalert2';
import toastr from 'toastr';
const props = defineProps(['msg']);
const listItems = ref([]);


async function getData() {
    axios.get("http://localhost:3000/all").then((result) => {
        listItems.value = result.data;
    })
}
getData();

function getFormValues(data) {
    let title = data.target.elements.title.value
    let description = data.target.elements.description.value
    axios.post("http://localhost:3000/store", {
        title: title,
        description: description
    }).then((result) => {
        console.log(result);
        snb('success', 'Successfully', 'Added Successfully');

        getData()
    })
}

function deleteUser(id) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
            this.axios.delete("http://localhost:3000/delete/" + id).then((result) => {
                
                getData()
            }).catch((err) => {
                alert('error')
            });
        }
        snb('error', 'Deleted', 'Deleted Successfully');

    })
}

function snb(type, head, text) {
    toastr[type](text, head, {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    });
}
</script>