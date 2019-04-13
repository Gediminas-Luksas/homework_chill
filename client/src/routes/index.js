import Home from '@/views/Home'
import About from '@/views/About'
import Login from '@/views/Login'
import Register from '@/views/Register'

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    }
]