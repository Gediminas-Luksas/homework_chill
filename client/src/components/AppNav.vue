<template>
    <nav class="app-nav">
        <ul>
            <li>
                <RouterLink to="/"> 
                    Home
                </RouterLink>
                <RouterLink to="/about"> 
                    About
                </RouterLink>
                <RouterLink to="/login"> 
                    Login
                </RouterLink>
                <RouterLink to="/register"> 
                    Register
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
name: 'AppNav'
}
</script>

<style lang="scss">
.app-nav {
padding:0;
margin: 0;
padding-bottom: 4px;

}
.app-nav ul{
    padding: 0 30px;
}
.app-nav li{
    list-style-type: none;
    padding: 5px 0;
}

.app-nav a{
    color: rgb(139, 142, 145);
    text-decoration: none;
}

.app-nav a:hover{
     text-decoration: underline;
     color: rgba(139, 142, 145, 0.493);
}
</style>
