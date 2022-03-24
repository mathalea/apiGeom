<script setup lang="ts">
import { ref, nextTick } from 'vue'
import Modal from './Modal.vue'

const radius = ref(4)
const showModal = ref(false)

const inputRadius = ref(null)

window.addEventListener('waitForRadius', async () => {
  showModal.value = true
  await nextTick()
  if (inputRadius.value) inputRadius.value.focus()
})

function addCircle() {
  const event = new CustomEvent('radiusIsSet', {detail: radius.value})
  showModal.value = false
  window.dispatchEvent(event)
}

</script>

<template>
  <Teleport to="body">
    <modal :show="showModal" @close="showModal = false">
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