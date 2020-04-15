<template>
  <div class="radio-group">
        <slot></slot>
      </div>
</template>

<script>
export default {
  name: 'CxRadioGroup',
  provide () {
    return {
      RadioGroup: this
    }
  },
  props: {
    value: null
  }
}
</script>
