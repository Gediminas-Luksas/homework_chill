<template>
	<div class="app-container">
		<slot/>
	</div>
</template>

<script>
export default {
	name: 'AppContainer'
}
</script>
<style lang="scss">
	.app-container {
		max-width: 1200px;
		padding: 0 30px;
		width: 100%;
		margin: 0 auto;
	}
</style>