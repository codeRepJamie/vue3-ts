<template>
  <p>{{ name }}</p>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface Book {
  title: string;
  author: string;
  year: number;
}
interface ComplexMessage {
  title: string;
  okMessage: string;
  cancelMessage: string;
}
export default defineComponent({
  name: "Book",
  props: {
    name: String,
    success: { type: String },
    callback: {
      type: Function as PropType<() => void>,
    },
    message: {
      type: Object as PropType<ComplexMessage>,
      required: true,
      validator(message: ComplexMessage) {
        return !!message.title;
      },
    },
  },
  data() {
    return {
      book: {
        title: "Vue 3 Guide",
        author: "Vue Team",
        year: 2020,
      } as Book,
    };
  },
  computed: {
    currentTitle(): string {
      return this.book.title;
    },
  },
});
</script>