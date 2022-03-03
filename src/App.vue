<template>
	<RadioGroup :disabled="disabled" v-model="firstSelectedValue">
		<RadioItem value="1">Значение 1</RadioItem>
		<RadioItem value="2">Значение 2</RadioItem>
		<RadioItem value="3">Значение 3</RadioItem>
	</RadioGroup>

	<RadioItem :disabled="disabled" value="4" v-model="secondSelectedValue">Значение 4</RadioItem>

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
			secondSelectedValue: 4,
			disabled: false,
		}
	}, 

	watch: {
		firstSelectedValue() {
			console.log(`Текущее значение firstSelectedValue (из radioGroup): ${this.firstSelectedValue}`);
		},
		secondSelectedValue() {
			console.log(`Текущее значение secondSelectedValue (из radioItem): ${this.secondSelectedValue}`);
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
