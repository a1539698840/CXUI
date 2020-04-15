<template>
  <label class="cx-radio" :class="{'is-checked': model === label}">
      <span class="cx-radio__input">
          <span class="cx-radio__inner"></span>
          <input
            class="cx-radio__original"
            type="radio"
            :name="name"
            :value="label"
            v-model="model"
          >
        </span>
        <span class="cx-radio__label">
          <slot></slot>
          <!-- 如果没有插槽内容，那么label就是内容 -->
          <template v-if="!$slots.default">{{label}}</template>
        </span>
  </label>
</template>

<script>
export default {
  name: 'CxRadio',
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  props: {
    label: {
      type: [String, Boolean, Number],
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    value: null
  },
  computed: {
    model: {
      get () {
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (value) {
        console.log(this.isGroup, this.RadioGroup)
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isGroup () {
      return !!this.RadioGroup
    }
  }
}
</script>

<style lang="scss" scoped>
.cx-radio {
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    .cx-radio__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .cx-radio__inner {
        border: 1px solid #dcdfe6;
        border-radius: 100%;
        width: 14px;
        height: 14px;
        background-color: #fff;
        position: relative;
        cursor: pointer;
        display: inline-block;
        box-sizing: border-box;
        &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%) scale(0);
        transition: transform .15s ease-in;
        }
    }
    .cx-radio__original {
        opacity: 0;
        outline: none;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0px;
        right: 0;
        bottom: 0;
        margin: 0;
    }
  }
    .cx-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.cx-radio.is-checked {
    .cx-radio__input {
    .cx-radio__inner {
        border-color: #409eff;
        background: #409eff;
        &:after {
        transform: translate(-50%,-50%) scale(1);
        }
    }
    }
    .cx-radio__label {
    color: #409eff;
    }
}
</style>
