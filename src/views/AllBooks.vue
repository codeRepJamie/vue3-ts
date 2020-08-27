<template>
  <Books :books="booksAvaluable" :loading="loading">
    <template v-if="isEmpty" #tips>
      暂无图书
    </template>
  </Books>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, computed, watch } from 'vue'
import Books from '@/components/Books.vue'
import { useBookListInject } from '@/context'
import books from '@/hacks/data/books'
import { getBooks } from '@/hacks/fetch'
import { useAsync } from '@/hooks'

export default defineComponent({
  name: 'AllBooks',
  components: { Books },
  setup() {
    const { books, setBooks, booksAvaluable } = useBookListInject()
    const loading = useAsync(async () => {
      const requestBooks = await getBooks()
      setBooks(requestBooks)
    })

    const isEmpty = computed(() => !booksAvaluable.value.length)

    return { loading, isEmpty, booksAvaluable }
  },
})
</script>