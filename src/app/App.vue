<template>
    <div class="app">
        <AppHeader>
            <AppNav />
        </AppHeader>
        <div class="app__whitebox">
            <AppWhiteBox>
                <RouterView />
            </AppWhiteBox>
        </div>
		<AppFooter/>
    </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppWhiteBox from '@/components/AppWhiteBox'
import AppFooter from '@/components/AppFooter'
import AppNav from '@/components/AppNav'


export default {
	name: 'App',
	components: {
		AppHeader,
		AppWhiteBox,
        AppFooter,
        AppNav
	}
}
</script>
<style lang="scss">
    .app {
        display: flex;
        flex-flow: column;
        min-height: 100%;

        &__whitebox {
            display: flex;
            flex: 1;
            margin-top: -45px;
            padding: 0 130px;
        }
    }
</style>