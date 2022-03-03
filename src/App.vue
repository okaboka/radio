<template>
	<RadioGroup :disabled="disabled" v-model="firstSelectedValue">
		<RadioItem value="1">Значение 1</RadioItem>
		<RadioItem value="2">Значение 2</RadioItem>
		<RadioItem value="3">Значение 3</RadioItem>
	</RadioGroup>

	<RadioGroup :disabled="disabled" v-model="secondSelectedValue">
		<RadioItem value="4">Значение 4</RadioItem>
		<RadioItem value="5">Значение 5</RadioItem>
		<RadioItem value="6">Значение 6</RadioItem>
	</RadioGroup>

	<RadioItem :disabled="disabled" value="7" v-model="thirdSelectedValue">Значение 7</RadioItem>

	<CustomButton @click='this.disabled = !this.disabled;'>
		Switch disable
	</CustomButton>
</template>

<script>
import RadioGroup from './components/RadioGroup.vue'
import RadioItem from './components/UI/RadioItem.vue'
import CustomButton from './components/UI/CustomButton.vue'

export default {
	name: 'App',
	
	components: {
		RadioGroup,
		RadioItem,
		CustomButton
	},

	data() {
		return {
			firstSelectedValue: 3,
			secondSelectedValue: 5,
			thirdSelectedValue: 1,
			disabled: false,
		}
	}, 

	watch: {
		firstSelectedValue() {
			console.log(`Текущее значение firstSelectedValue (из radioGroup): ${this.firstSelectedValue}`);
		},
		secondSelectedValue() {
			console.log(`Текущее значение secondSelectedValue (из radioGroup): ${this.secondSelectedValue}`);
		},
		thirdSelectedValue() {
			console.log(`Текущее значение thirdSelectedValue (из RadioItem): ${this.thirdSelectedValue}`);
		},
		disabled() {
			console.log(`Текущее значение disabled: ${this.disabled}`);
		},
	},
}
</script>

<style lang="scss">
	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
