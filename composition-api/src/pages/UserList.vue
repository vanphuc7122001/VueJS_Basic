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
                    Xem chi tiết
                </td>
            </tr>
        </tbody>
    </table>

    </div>

</template>

<script>
import { ref } from 'vue'
import userService from '../services/user-service'


export default {
    setup(){
        const userList = ref([])
        const fetchAllUser = async () => {
            const res = await userService.get()
            // console.log(res);
            userList.value = [...res]
        }

        fetchAllUser()

        return {
            userList
        }
    }
}
</script>

<style>

</style>