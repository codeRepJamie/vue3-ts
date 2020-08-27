import { provide, inject, ref, Ref, computed } from 'vue'
import { Book, Books } from '@/types'

const BookSymbol = Symbol()

type BookContext = {
  books: Ref<Books>
  finishedBooks: Ref<Books>
  booksAvaluable: Ref<Books>
  setBooks: (value: Books) => void
  addFinishedBooks: (book: Book) => void
  removeFinishedBooks: (book: Book) => void
  hasReadedBook: (book: Book) => Boolean
}

export const useBookListProvide = () => {
  const books = ref<Books>([])
  const setBooks = (value: Books) => {
    books.value = value
  }
  const finishedBooks = ref<Books>([])

  // 可选图书
  const booksAvaluable = computed(() => {
    return books.value.filter(book =>
      finishedBooks.value.every(({ id }) => id !== book.id)
    )
  })

  const addFinishedBooks = (book: Book) => {
    if (!hasReadedBook(book)) {
      finishedBooks.value.push(book)
    }
  }

  const removeFinishedBooks = (book: Book) => {
    if (hasReadedBook(book)) {
      finishedBooks.value.splice(
        finishedBooks.value.findIndex(item => item.id === book.id),
        1
      )
    }
  }

  const hasReadedBook = (book: Book) => finishedBooks.value.includes(book)

  provide(BookSymbol, {
    books,
    setBooks,
    finishedBooks,
    booksAvaluable,
    addFinishedBooks,
    removeFinishedBooks,
    hasReadedBook
  })
}

export const useBookListInject = () => {
  const booksContext = inject<BookContext>(BookSymbol)
  if (!booksContext) {
    throw new Error('useBookListInject一定在useBookListProvide执行后生效')
  }
  return booksContext
}
