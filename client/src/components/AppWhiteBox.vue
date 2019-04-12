<template>
	<div class="app-white-box">
		<slot/>
	</div>
</template>

<script>
export default {
	name: 'AppWhiteBox'
}
</script>
<style lang="scss">
	.app-white-box {
		background-color: white;
		box-shadow: 0 1px 2px 0 rgba(black, .15);
		border-radius: 4px;
		width: 100%;
		padding: 60px;
		padding-bottom: 120px;
	}
</style>