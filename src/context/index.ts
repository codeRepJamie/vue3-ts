import { useBookListProvide, useBookListInject } from './books'

export { useBookListInject }
export const useProvide = () => {
  useBookListProvide()
}
