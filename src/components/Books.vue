<template>
  <span v-if="loading">正在加载中...</span>
  <section v-else class="wrap">
    <section class="content">
      <Book v-for="book in pagedBooks" :key="book.id" :book="book" />
      <Pagination
        class="pagination"
        v-if="pagedBooks.length"
        :pageSize="pageSize"
        :total="books.length"
        :current="bindings.current"
        @current-change="bindings.currentChange"
      />
      <slot name="tips"></slot>
    </section>
  </section>
</template>

<script lang="ts">
import { defineComponent, watch, watchEffect, ref } from 'vue'
import { usePages } from '@/hooks'
import { Books } from '@/types'
import Book from './Book.vue'
import Pagination from './ElPagination/index.vue'

export default defineComponent({
  props: {
    books: {
      type: Array,
      default: () => [],
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Book,
    Pagination,
  },
  setup(props) {
    const pageSize = 10
    const { data: pagedBooks, bindings } = usePages(
      () => props.books as Books,
      {
        pageSize,
      }
    )
    return {
      pagedBooks,
      bindings,
      pageSize,
    }
  },
})
</script>

<style>
.content {
  max-width: 700px;
  margin: auto;
}

.pagination {
  margin-top: 12px;
}
</style>