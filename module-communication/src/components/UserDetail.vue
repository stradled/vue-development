<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ switchName() }}</p>
        <p>User Name: {{ userAge }}</p>
        <button @click="resetName">Reset Name </button>
        <button @click="resetFn()">Reset Name </button>
    </div>
</template>

<script>
	export default {
		props: {
			myName: {
				type: String,
				//required: true,
				//default: 'Name not set'
				//type: Object
				// default: function(){
				// 	return {
				// 		name: 'Martin'
				// 	}
				// }
			},
			resetFN: Function,
			userAge: Number
		},
		methods: {
			switchName() {
				return this.myName.split("").reverse().join("");
			},
			resetName(){
				//Keep in mind reference types and primitive types
				this.myName = 'Blah Balh';
				this.$emit('nameWasReset', this.myName);
			}
		}
	}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
