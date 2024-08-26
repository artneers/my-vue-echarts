<template>
  <div class="my-component">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BarCharts'
};
</script>

<style scoped>
.my-component {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>