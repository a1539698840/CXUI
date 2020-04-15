<template>
<div class="cx-input"  :class="{'cx-input--suffix': this.clearable || this.showPassword}">
    <input
      class="cx-input__inner"
      :class="{'is-disabled': disabled}"
      :placeholder="placeholder"
      :type="showPassword ? (passwordVisible ? 'text': 'password') : type"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
      ref="input"
    >
    <span class="cx-input__suffix" v-if="showSuffix">
      <i class="iconfont cx-icon-close" v-if="clearable" @click="clear"></i>
      <i class="iconfont cx-icon-eye_protection" v-if="showPassword" @click="handlePasswordVisible"></i>
    </span>
</div>
</template>

<script>
export default {
  name: 'CxInput',
  data () {
    return {
      passwordVisible: true
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否显示清空按钮
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      this.$emit('input', '')
    },
    handlePasswordVisible () {
      // 切换type类型
      this.passwordVisible = !this.passwordVisible
    },
    handleFocus (e) {
      this.$emit('focus', e)
    },
    handleBlur (e) {
      this.$emit('blur', e)
    },
    handleChange (e) {
      this.$emit('change', e.target.value)
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
  }
}
</script>

<style lang="scss" scoped>
.cx-input {
      width: 100%;
      position: relative;
      font-size: 14px;
      display: inline-block;
      .cx-input__inner {
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        width: 100%;
        &.is-disabled {
          background-color: #f5f7fa;
          border-color: #e4e7ed;
          color: #c0c4cc;
          cursor: not-allowed;
        }
        &:focus {
          outline: none;
          border-color: #409eff;
        }
      }
    }
 .cx-input--suffix {
    .cx-input__inner {
      padding-right: 30px;
    }
    .cx-input__suffix {
      position: absolute;
      height: 100%;
      right: 10px;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
      transition: all .3s;
      z-index: 900;
      i {
        color: #c0c4cc;
        font-size: 14px;
        cursor: pointer;
        transition: color .2s cubic-bezier(.645,.045,.355,1);
      }
    }
}
</style>
