<template>
	<div class="app-header-wrapper">
		<slot/>
		<header class="app-header">
			<div class="app-header__content">
				<h1>Gediminas Lukšas</h1>
				<h3>Portfolio</h3>
			</div>
		</header>
	</div>
</template>

<script>
export default {
	name: 'AppHeader',
}
</script>
<style lang="scss">
	.app-header-wrapper {
		background-color:aqua;
		height: 40vh;
		width: 100%;
	}
	.app-header {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
        height: 60%;


        &__content {
            color: rgb(139, 142, 145);
            text-transform: uppercase;
            text-align: center;
        }
	}
</style>