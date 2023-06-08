<!-- <template>
  
  <div class="container">
    <form @submit="submitForm">
      <input type="file" @change="onChange">
      <button type="submit">upload</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
export default {
  setup() {
    const file = ref('')

    const onChange = (e) => {
      file.value = e.target.files[0]
    }

    const submitForm = (e) => {
        e.preventDefault();
        const config = {
          headers : {
            'content-type' : 'multipart/form-data'
          }
        }

        let data = new FormData()
        data.append('avatar', file.value)

        console.log(data);
        axios.post('http://localhost:3000/api/customers/' , data, config)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return {
      onChange,
      submitForm
    }

  }
}
</script>

<style>

</style> -->


<template>
  <div>
    <input type="file" @change="handleFileSelect">
    <input type="text" v-model="name">
    <button @click="uploadImage">Upload</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      selectFile: '',
      name: ''
    } 
  },
  methods: {
    handleFileSelect(event) {
      this.selectedFile = event.target.files[0];
    },
    uploadImage() {
      const formData = new FormData();
      formData.append('image', this.selectedFile);
      formData.append('name', this.name);

      console.log(formData);

      axios.post('http://localhost:3000/upload', formData)
        .then((response) => {
          console.log('Image uploaded successfully' , response);
          // Handle the response from the server
        })
        .catch(error => {
          console.error('Error uploading image', error);
          // Handle the error
        });
    }
  }
}
</script>
