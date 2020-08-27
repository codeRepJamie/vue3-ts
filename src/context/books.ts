import { provide, inject, ref, Ref, computed } from 'vue'
import { Book, Books } from '@/types'

const BookSymbol = Symbol()

type BookContext = {
  books: Ref<Books>
  setBooks: (value: Books) => void
  finishedBooks: Ref<Books>
  booksAvaluable: Ref<Books>
}

export const useBookListProvide = () => {
  const books = ref<Books>([])
  const setBooks = (value: Books) => {
    books.value = value
  }
  const finishedBooks = ref<Books>([])

  // 可选图书
  const booksAvaluable = computed(() => {
    return books.value.filter(
      book => !finishedBooks.value.find(({ id }) => id === book.id)
    )
  })

  provide(BookSymbol, {
    books,
    setBooks,
    finishedBooks,
    booksAvaluable
  })
}

export const useBookListInject = () => {
  const booksContext = inject<BookContext>(BookSymbol)
  if (!booksContext) {
    throw new Error('useBookListInject一定在useBookListProvide执行后生效')
  }
  return booksContext
}
