<template> 
    <div class="container">
        <table class="table table-bordered">
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Age</th>
                <th>Desc</th>
                <th>Xem</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(userItem, index) in userList" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ userItem.name }}</td>
                <td>{{ userItem.age }}</td>
                <td>{{ userItem.description }}</td>
                <td>
                    <router-link :to="`/users/${userItem.id}`">Xem chi tiết</router-link>
                </td>
            </tr>
        </tbody>
    </table>

    </div>

</template>

<script>

import useUser from '../use/fetchAllUser'

export default {
    setup(){
        
        const {userList, fetchAllUser} = useUser()
        fetchAllUser()
        return {
            userList
        }
    }
}
</script>

<style>

</style>