<template>
	<div>
		<h3>New Quote</h3>
		<button @click="counter++"> Increate !</button>
		<p>{{ counter }}</p>

	</div>
</template>

<script>
	export default{
		data: function() {
			return{
				counter: 0	
			};
		},
		destroyed() {
			console.log('Destroyed!')
		},
		activated() {
			console.log('Activated');
		},
		deactivated() {
			console.log('Deactivated');
		}

	}
</script>

<style scoped>

</style>