<template>
  <Books :books="finishedBooks">
    <template v-if="isEmpty" #tips> 暂无已阅读图书 </template>
  </Books>
</template>

<script lang="ts">
import { defineComponent, ref, computed, Ref } from 'vue'
import Books from '@/components/Books.vue'
import { useBookListInject } from '@/context'

export default defineComponent({
  name: 'FinishedBooks',
  components: {
    Books,
  },
  setup() {
    const { finishedBooks } = useBookListInject()
    const isEmpty = computed(() => !finishedBooks.value.length)
    return { finishedBooks, isEmpty }
  },
})
</script>