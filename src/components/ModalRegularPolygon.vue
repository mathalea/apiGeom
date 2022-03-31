<script setup lang="ts">
import { ref, nextTick } from 'vue'
import Modal from './Modal.vue'

const numberOfSides = ref(4)
const showModalRegularPolygon = ref(false)

const inputRegularPolygon = ref(null)

window.addEventListener('waitForNumberOfSides', async () => {
  showModalRegularPolygon.value = true
  await nextTick()
  if (inputRegularPolygon.value) {
    const input = inputRegularPolygon.value as HTMLElement
    input.focus()
  }
})

function addRegularPolygon() {
  const event = new CustomEvent('numberOfSidesIsSet', {detail: numberOfSides.value})
  showModalRegularPolygon.value = false
  window.dispatchEvent(event)
}

</script>

<template>
  <Teleport to="body">
    <modal :show="showModalRegularPolygon" @close="showModalRegularPolygon = false">
      <template #header>
       <h1 class="font-mono font-extrabold text-blue-700 text-l">Nombre de côtés</h1>
      </template>
      <template #body>
        <input ref="inputRegularPolygon" v-model="numberOfSides" v-on:keyup.enter="addRegularPolygon" type="number" min="0" class="border border-black rounded-lg p-1" />
      </template>
      <template #footer>
        <button class="border border-black rounded-lg p-1 mb-2" @click="addRegularPolygon">Valider</button>
      </template>
    </modal>
  </Teleport>
</template>