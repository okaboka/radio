<template>
  <div class="radio-group">
    <slot></slot>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
	name: 'RadioGroup',
	
	props: {
		modelValue: [String, Number],
		disabled: Boolean,
	},
	
	data() {
		return {
			name: new Date().getTime() + Math.floor(Math.random() * 100),
		}
	},
	
	provide() {
		return {
			nameInj: this.name,
			currentValueInj: computed(() => this.modelValue),
			disabledInj: computed(() => this.disabled),
			emitValueInj: (value) => {
				this.$emit('update:modelValue', value)
			},
		}
	},
	
}
</script>

<style scoped lang="scss">
  .radio-group {
    display: flex;
    flex-direction: column;
    gap: 20px;
	margin-bottom: 40px;
  }
</style>
