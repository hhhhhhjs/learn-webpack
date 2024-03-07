import { createApp,ref } from 'vue/dist/vue.esm-bundler.js'
const app = createApp({
    setup(){
        const msg = ref('哈哈哈')
        return {
            msg
        }
    }
})
app.mount('#app')