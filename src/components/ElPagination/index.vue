<template>
  <div class="el-pagination" current="1">
    <div class="el-pagination__rightwrapper">
      <span class="el-pagination__total">共 {{ total }} 条</span>
    </div>
    <button
      type="button"
      :disabled="isFirstPage"
      class="btn-prev"
      @click="toPrevPage"
    >
      <i class="el-icon el-icon-arrow-left"></i>
    </button>
    <ul class="el-pager">
      <li
        v-for="pageNum in pageLength"
        :key="pageNum"
        :class="{ number: true, active: pageNum === current }"
        @click="selectPage(pageNum)"
      >
        {{ pageNum }}
      </li>
    </ul>
    <button
      type="button"
      :disabled="isLastPage"
      class="btn-next"
      @click="toNextPage"
    >
      <i class="el-icon el-icon-arrow-right"></i></button
    ><span class="el-pagination__jump"
      >前往
      <div class="el-input el-pagination__editor is-in-pagination">
        <input
          type="number"
          autocomplete="off"
          min="1"
          max="7"
          class="el-input__inner"
          v-model.number="innerCurent"
        />
      </div>
      页</span
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'

export default defineComponent({
  name: 'ElPagination',
  props: {
    total: {
      type: Number,
      default: 0,
    },
    pageSize: {
      type: Number,
      default: 1,
    },
    current: {
      type: Number,
      default: 1,
    },
  },
  setup(props, { emit }) {
    const pageLength = computed(() => Math.ceil(props.total / props.pageSize))

    const selectPage = (number: number) => {
      emit('current-change', number)
    }

    const isFirstPage = computed(() => props.current === 1)
    const isLastPage = computed(() => props.current === pageLength.value)

    const toPrevPage = () => {
      if (!isFirstPage.value) {
        emit('current-change', props.current - 1)
      }
    }
    const toNextPage = () => {
      if (!isLastPage.value) {
        emit('current-change', props.current + 1)
      }
    }

    const innerCurent = ref<number | null | string>(null)

    watch(innerCurent, (value) => {
      if (value == null || value === '' || value < 1) {
        emit('current-change', 1)
        if (typeof value === 'number') {
          innerCurent.value = 1
        }
      } else if (value > pageLength.value) {
        emit('current-change', pageLength.value)
        innerCurent.value = pageLength.value
      } else {
        emit('current-change', value)
      }
    })

    return {
      pageLength,
      selectPage,
      isFirstPage,
      isLastPage,
      toPrevPage,
      toNextPage,
      innerCurent,
    }
  },
})
</script>

<style lang="scss" scope>
@import './Pagination';
</style>