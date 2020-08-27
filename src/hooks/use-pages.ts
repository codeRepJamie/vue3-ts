import { watchEffect, watch, ref, reactive, Ref } from 'vue'
export interface PageOption {
  pageSize?: number
}

export function usePages<T>(watchCallback: () => T[], pageOption?: PageOption) {
  type RawDataRef = Ref<T[]>
  type DataRef = Ref<T[]>
  const { pageSize = 10 } = pageOption || {}

  const rawData: RawDataRef = ref([])
  const data: DataRef = ref([])

  const bindings = reactive({
    current: 1,
    currentChange: (currentPage: number) => {
      bindings.current = currentPage
      data.value = sliceData(rawData.value, currentPage)
    }
  })

  // 根据页数切分数据
  const sliceData = (rawData: T[], currentPage: number): T[] => {
    return rawData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
  }

  watchEffect(() => {
    // 更新原始数据
    rawData.value = watchCallback()
    bindings.currentChange(1)
  })

  return {
    data,
    bindings
  }
}
