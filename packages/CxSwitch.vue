<template>
  <label class="cx-switch" @click="handleClick" :class="{'is-checked': value}">
      <input class="cx-switch__input" ref='input' @click="handleChange" type="checkbox">
        <span class="cx-switch__core" ref='core'>
          <span class="cx-switch__button"></span>
        </span>
    </label>
</template>

<script>
export default {
  name: 'CxSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.setColor()
    this.$refs.input.checked = this.value
  },
  methods: {
    async handleClick () {
      this.$emit('input', this.value)
      // 改变input 的值
      await this.$nextTick()
      this.setColor()
    },
    async handleChange () {
      this.$emit('input', !this.value)
      // 修改checkbox的值
      await this.$nextTick()
      this.$refs.input.checked = this.value
    },
    setColor () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cx-switch {
    display: inline-flex;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    vertical-align: middle;
    .cx-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .cx-switch__button {
        position: absolute;
        top: 1px;
        left: 1px;
        border-radius: 100%;
        transition: all .3s;
        width: 16px;
        height: 16px;
        background-color: #fff;
    }
  }
}
 .cx-switch.is-checked {
    .cx-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .cx-switch__button {
        transform: translateX(20px);
    }
  }
}
.cx-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
}
</style>
