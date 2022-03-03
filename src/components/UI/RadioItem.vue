<template lang="">
    <div>
        <label class="custom-radio">
            <input 
                type="radio" 
                :disabled="isDisabled" 
                :name="nameValue" 
                :value="value"
                :checked='isChecked'
                @click='emitValue(value)'
            >
            <span><slot></slot></span>
        </label>
    </div>
</template>

<script>
export default {
    name: 'RadioItem',

    props: {
        value: {
            type: [String, Number],
            required: true,
        },
        modelValue: {
            type: [String, Number],
            default: null,
        },
        disabled: {
            type: Boolean,
            default: null,
        },
        name: {
            type: [String, Number],
            default: null,
        },
	},

    inject: {
        emitValueInj: {
            from: 'emitValueInj',
            default: null
        },
        currentValueInj: {
            from: 'currentValueInj',
            default: null
        },
        disabledInj: {
            from: 'disabledInj',
            default: null
        },
        nameInj: {
            from: 'nameInj',
            default: null
        },
    },
    
    computed: {
        emitValue() {
            return this.emitValueInj ?  this.emitValueInj : (value) => {this.$emit('update:modelValue', value == this.modelValue ? null:value)}
        },
        isChecked() {
            return this.currentValueInj ? this.currentValueInj == this.value : this.modelValue == this.value
        },
        isDisabled() {
            return this.disabledInj ? this.disabledInj == 1 : this.disabled == 1
        },
        nameValue() {
            return this.nameInj === null ? new Date().getTime() + Math.floor(Math.random() * 100) : this.nameInj
        },
    }
}
</script>

<style lang="scss">
.custom-radio>input {
  position: absolute;
  z-index: -1;
  opacity: 0;
}

.custom-radio>span {
  display: inline-flex;
  align-items: center;
  user-select: none;
}

.custom-radio>span::before {
  content: '';
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  border-radius: 50%;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}

.custom-radio>input:not(:disabled):not(:checked)+span:hover::before {
  border-color: #b3d7ff;
}

.custom-radio>input:not(:disabled):active+span::before {
  background-color: #b3d7ff;
  border-color: #b3d7ff;
}

.custom-radio>input:focus+span::before {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.custom-radio>input:focus:not(:checked)+span::before {
  border-color: #80bdff;
}

.custom-radio>input:checked+span::before {
  border-color: #0b76ef;
  background-color: #0b76ef;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}

.custom-radio>input:disabled+span::before {
  background-color: #e9ecef;
}
</style>