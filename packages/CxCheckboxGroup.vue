<template>
  <div class="hm-checkbox-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'CxCheckboxGroup',
  provide () {
    return {
      CheckboxGroup: this
    }
  },
  props: {
    value: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
