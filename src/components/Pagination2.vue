<template>
  <div class="el-pagination" current="1">
    <div class="el-pagination__rightwrapper">
      <span class="el-pagination__total">共 70 条</span>
    </div>
    <button type="button" disabled="disabled" class="btn-prev">
      <i class="el-icon el-icon-arrow-left"></i>
    </button>
    <ul class="el-pager">
      <li class="number active">1</li>
      <!---->
      <li class="number">2</li>
      <li class="number">3</li>
      <li class="number">4</li>
      <li class="number">5</li>
      <li class="number">6</li>
      <!---->
      <li class="number">7</li>
    </ul>
    <button type="button" class="btn-next">
      <i class="el-icon el-icon-arrow-right"></i></button
    ><span class="el-pagination__jump"
      >前往
      <div class="el-input el-pagination__editor is-in-pagination">
        <!----><input
          type="number"
          autocomplete="off"
          min="1"
          max="7"
          class="el-input__inner"
        /><!----><!----><!----><!---->
      </div>
      页</span
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Pagination',
})
</script>

<style lang="scss" scope>
@import './Pagination';
</style>