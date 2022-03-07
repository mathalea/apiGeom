<script setup lang="ts">
import { ref } from 'vue'


const props = defineProps<{
  fileName: String,
  selected: Boolean
}>()

const selected = ref(props.selected)

function toggleState() {
  selected.value = !selected.value
}



</script>

<template>
  <img
    class="
      inline
      bg-white
      hover:bg-gray-100
      border border-gray-300
      focus:ring-4 focus:ring-gray-100
      rounded-lg
      p-1
      mr-2
      mb-2
      cursor-pointer
    "
    :class="{'bg-slate-100 border-blue-600 shadow-2xl' : selected}"
    :src="`./png/${fileName}.png`"
    @click="toggleState()"
  />
</template>

