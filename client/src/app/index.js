import Vue from 'vue'
import App from './App'
import { createRouter } from '@/packages/vue-router'

export const createApp = () => {
    const router = createRouter()
    const app = new Vue ({
        router,
        render: h => h(App)
    })
        return { app }
}
