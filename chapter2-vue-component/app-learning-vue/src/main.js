import { createApp } from 'vue'
import App from './App.vue'
import GlobalComponent from './components/GlobalComponent.vue'



const app = createApp(App)
 // param 1 set name component, param 2 get name component was import 
app.component('GlobalComponent', GlobalComponent)



app.mount('#app')
// teleport // n