import { provide, inject, ref, Ref } from 'vue'
import { Book, Books } from '@/types'

const BookSymbol = Symbol()

type BookContext = {
  books: Ref<Books>
  setBooks: (value: Books) => void
}

export const useBookListProvide = () => {
  const books = ref<Books>([])
  const setBooks = (value: Books) => {
    books.value = value
  }
  provide(BookSymbol, {
    books,
    setBooks
  })
}

export const useBookListInject = () => {
  const booksContext = inject<BookContext>(BookSymbol)
  if (!booksContext) {
    throw new Error('useBookListInject一定在useBookListProvide执行后生效')
  }
  return booksContext
}
