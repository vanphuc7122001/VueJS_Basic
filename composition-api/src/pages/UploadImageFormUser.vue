<template>
    <div class="container">
        <h1>Upload image complicated</h1>
        <form method="post">
            <h4>Avatar</h4>
            <input type="file" @change="handleFileSelect">
            <br>
            <h4>Name</h4>
            <input type="text" v-model="viewData.name">
            <h4>Birthday</h4>
            <input type="date" v-model="viewData.birthday">
            <h4>address</h4>
            <input type="text" v-model="viewData.address">
            <h4>phone</h4>
            <input type="text" v-model="viewData.phone">
            <h4>email</h4>
            <input type="text" v-model="viewData.email">
            <h4>Customertype</h4>
            <button class="btn btn-primary" @click="uploadImage">Submit form</button>
        </form>
    </div>
</template>

<script>

import axios from 'axios';
import { reactive } from 'vue'
export default {
    setup() {
        const viewData = reactive({
            avatar: "",
            name: '',
            birthday: "",
            address: "",
            phone: "",
            email: '',
            customerTypesId: 'c1e46035-c7f8-4856-9456-afa5a6416284'
        })

        const handleFileSelect = (event) => {
            viewData.avatar = event.target.files[0];
        }


        const uploadImage = (event) => {
            event.preventDefault();
            const formData = new FormData();
            formData.append('avatar', viewData.avatar);
            formData.append('name', viewData.name);
            formData.append('birthday', viewData.birthday);
            formData.append('address', viewData.address);
            formData.append('phone', viewData.phone);
            formData.append('email', viewData.email);
            formData.append('customerTypesId', viewData.customerTypesId);

            axios.post('http://localhost:3000/api/customers/', formData)
                .then((response) => {
                    console.log('Image uploaded successfully', response);
                    // Handle the response from the server
                })
                .catch(error => {
                    console.error('Error uploading image', error);
                    // Handle the error
                });
        }


        return { viewData, handleFileSelect, uploadImage }
    }
}
</script>

<style></style>