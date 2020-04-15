<template>
  <div class="cx-button" :class="[`cx-button--${type}`, {
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-disabled': disabled
    }]"
    :disabled="disabled"
    @click="handleClick"
    >
    <span>
      <i :class="icon" v-if="icon" />
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'CxButton',
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang='scss' scoped>
 .cx-button {
      display: inline-block;
      line-height: 1;
      white-space: nowrap;
      cursor: pointer;
      background: #fff;
      border: 1px solid #dcdfe6;
      color: #606266;
      -webkit-appearance: none;
      text-align: center;
      box-sizing: border-box;
      outline: none;
      margin: 0;
      transition: 0.1s;
      font-weight: 500;
      // 禁止元素的文字被选中
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      padding: 12px 20px;
      font-size: 14px;
      border-radius: 4px;
      &:hover,
      &:focus {
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
      }
    }
     .cx-button--primary {
      color: #fff;
      background-color: #409eff;
      border-color: #409eff;
      &:hover,
      &:focus {
        background: #66b1ff;
        border-color: #66b1ff;
        color: #fff;
      }
    }
    .cx-button--success {
      color: #fff;
      background-color: #67c23a;
      border-color: #67c23a;
      &:hover,
      &:focus {
        background: #85ce61;
        border-color: #85ce61;
        color: #fff;
      }
    }
    .cx-button--info {
      color: #fff;
      background-color: #909399;
      border-color: #909399;
      &:hover,
      &:focus {
        background: #a6a9ad;
        border-color: #a6a9ad;
        color: #fff;
      }
    }
    .cx-button--warning {
      color: #fff;
      background-color: #e6a23c;
      border-color: #e6a23c;
      &:hover,
      &:focus {
        background: #ebb563;
        border-color: #ebb563;
        color: #fff;
      }
    }
    .cx-button--danger {
      color: #fff;
      background-color: #f56c6c;
      border-color: #f56c6c;
      &:hover,
      &:focus {
        background: #f78989;
        border-color: #f78989;
        color: #fff;
      }
    }
     // 朴素的按钮
    .cx-button.is-plain {
      &:hover,
      &:focus {
        background: #fff;
        border-color: #409eff;
        color: #409eff;
      }
    }
    .cx-button--primary.is-plain {
      color: #409eff;
      background: #ecf5ff;
      border-color: #b3d8ff;
      &:hover,
      &:focus {
        background: #409eff;
        border-color: #409eff;
        color: #fff;
      }
    }
    .cx-button--success.is-plain {
      color: #67c23a;
      background: #f0f9eb;
      border-color: #c2e7b0;
      &:hover,
      &:focus {
        background: #67c23a;
        border-color: #67c23a;
        color: #fff;
      }
    }
    .cx-button--info.is-plain {
      color: #909399;
      background: #f4f4f5;
      border-color: #d3d4d6;
      &:hover,
      &:focus {
        background: #909399;
        border-color: #909399;
        color: #fff;
      }
    }
    .cx-button--warning.is-plain {
      color: #e6a23c;
      background: #fdf6ec;
      border-color: #f5dab1;
      &:hover,
      &:focus {
        background: #e6a23c;
        border-color: #e6a23c;
        color: #fff;
      }
    }
    .cx-button--danger.is-plain {
      color: #f56c6c;
      background: #fef0f0;
      border-color: #fbc4c4;
      &:hover,
      &:focus {
        background: #f56c6c;
        border-color: #f56c6c;
        color: #fff;
      }
    }
    .cx-button.is-round {
      border-radius: 20px;
      padding: 12px 23px;
    }

    // 原形按钮
    .cx-button.is-circle {
      border-radius: 50%;
      padding: 12px;
    }
     // 按钮后的文本
    .cx-button [class*=cx-icon-]+span {
        margin-left: 5px;
    }
     // 禁用
    .cx-button.is-disabled,
    .cx-button.is-disabled:focus,
    .cx-button.is-disabled:hover {
        color: #c0c4cc;
        cursor: not-allowed;
        background-image: none;
        background-color: #fff;
        border-color: #ebeef5;
    }
    .cx-button.is-disabled,
    .cx-button.is-disabled:focus,
    .cx-button.is-disabled:hover {
        color: #c0c4cc;
        cursor: not-allowed;
        background-image: none;
        background-color: #fff;
        border-color: #ebeef5;
    }
    .cx-button--primary.is-disabled,
    .cx-button--primary.is-disabled:active,
    .cx-button--primary.is-disabled:focus,
    .cx-button--primary.is-disabled:hover {
        color: #fff;
        background-color: #a0cfff;
        border-color: #a0cfff;
    }
    .cx-button--success.is-disabled,
    .cx-button--success.is-disabled:active,
    .cx-button--success.is-disabled:focus,
    .cx-button--success.is-disabled:hover {
        color: #fff;
        background-color: #b3e19d;
        border-color: #b3e19d;
    }
    .cx-button--info.is-disabled,
    .cx-button--info.is-disabled:active,
    .cx-button--info.is-disabled:focus,
    .cx-button--info.is-disabled:hover {
        color: #fff;
        background-color: #c8c9cc;
        border-color: #c8c9cc;
    }
    .cx-button--warning.is-disabled,
    .cx-button--warning.is-disabled:active,
    .cx-button--warning.is-disabled:focus,
    .cx-button--warning.is-disabled:hover {
        color: #fff;
        background-color: #f3d19e;
        border-color: #f3d19e;
    }
    .cx-button--danger.is-disabled,
    .cx-button--danger.is-disabled:active,
    .cx-button--danger.is-disabled:focus,
    .cx-button--danger.is-disabled:hover {
        color: #fff;
        background-color: #fab6b6;
        border-color: #fab6b6;
    }
</style>
