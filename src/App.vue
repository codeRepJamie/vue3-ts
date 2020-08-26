<template>
  <div id="app">
    {{ books }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useProvide, useBookListInject } from './context'

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    useProvide()
    const { books, setBooks } = useBookListInject()
    return { books }
  },
})
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
