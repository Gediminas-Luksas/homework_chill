<template>
<div>
    <h1>Register</h1>
    <input 
    type="email"
    name="email"
    v-model="email"
    placeholder="Your Email"
     />
    <br />
     <input 
    type="password"
    name="password"
    v-model="password"
    placeholder="Your Password"
     />
     <br />
    <button
    @click="register"
    >
    Register
    </button>
</div>
</template>

<script>
import AuthService from '@/services/AuthService'
export default {
    name: 'Register',
    data () {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
    async register () {
        const respons = await AuthService.register({
            email: this.email,
            password: this.password
        })
            console.log(respons.data)
    }
}
}
</script>

<style>

</style>
