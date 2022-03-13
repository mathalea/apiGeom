<script setup lang="ts">
import { ref } from 'vue'
import Modal from './Modal.vue'

const radius = ref(4)
const showModal = ref(false)

window.addEventListener('waitForRadius', () => showModal.value = true)

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
        <input v-model="radius" type="number" min="0" class="border border-black rounded-lg p-1" />
      </template>
      <template #footer>
        <button class="border border-black rounded-lg p-1 mb-2" @click="addCircle">Valider</button>
      </template>
    </modal>
  </Teleport>
</template>