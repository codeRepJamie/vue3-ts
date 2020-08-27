<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">全部图书({{ booksAvaluable.length }})</router-link>
      <router-link to="/finished"
        >已阅图书({{ finishedBooks.length }})</router-link
      >
      <h2>目前共有{{ bookCount }}本图书</h2>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useProvide, useBookListInject } from './context'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'App',
  components: {},
  setup(props, context) {
    useProvide()
    const { booksAvaluable, finishedBooks } = useBookListInject()
    const route = useRoute()

    const bookCount = computed(() => {
      if (route.name === 'All') {
        return booksAvaluable.value.length
      } else {
        return finishedBooks.value.length
      }
    })

    return {
      bookCount,
      booksAvaluable,
      finishedBooks,
    }
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
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    padding: 12px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
