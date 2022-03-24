<script setup lang="ts">
import { ref, nextTick } from 'vue'
import Modal from './Modal.vue'

const angle = ref(45)
const showModalRotation = ref(false)

const inputAngle = ref(null)

window.addEventListener('waitForAngle', async () => {
  showModalRotation.value = true
  await nextTick()
  if (inputAngle.value) inputAngle.value.focus()
})

function addRotation() {
  const event = new CustomEvent('angleIsSet', {detail: angle.value})
  showModalRotation.value = false
  window.dispatchEvent(event)
}

</script>

<template>
  <Teleport to="body">
    <modal :show="showModalRotation" @close="showModalRotation = false">
      <template #header>
       <h1 class="font-mono font-extrabold text-blue-700 text-l">Angle de la rotation</h1>
      </template>
      <template #body>
        <input ref="inputAngle" v-model="angle" v-on:keyup.enter="addRotation" type="number" class="border border-black rounded-lg p-1" />
      </template>
      <template #footer>
        <button class="border border-black rounded-lg p-1 mb-2" @click="addRotation">Valider</button>
      </template>
    </modal>
  </Teleport>
</template>