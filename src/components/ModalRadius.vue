<script setup lang="ts">
import { ref, nextTick } from 'vue'
import Modal from './Modal.vue'

const radius = ref(4)
const showModalRadius = ref(false)

const inputRadius = ref(null)

window.addEventListener('waitForRadius', async () => {
  showModalRadius.value = true
  await nextTick()
  if (inputRadius.value) {
    const input = inputRadius.value as HTMLElement
    input.focus()
  }
})

function addCircle() {
  const event = new CustomEvent('radiusIsSet', {detail: radius.value})
  showModalRadius.value = false
  window.dispatchEvent(event)
}

</script>

<template>
  <Teleport to="body">
    <modal :show="showModalRadius" @close="showModalRadius = false">
      <template #header>
       <h1 class="font-mono font-extrabold text-blue-700 text-l">Rayon du cercle</h1>
      </template>
      <template #body>
        <input ref="inputRadius" v-model="radius" v-on:keyup.enter="addCircle" type="number" min="0" class="border border-black rounded-lg p-1" />
      </template>
      <template #footer>
        <button class="border border-black rounded-lg p-1 mb-2" @click="addCircle">Valider</button>
      </template>
    </modal>
  </Teleport>
</template>