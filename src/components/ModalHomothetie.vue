<script setup lang="ts">
import { ref, nextTick } from 'vue'
import Modal from './Modal.vue'

const rapport = ref(1)
const showModalHomothetie = ref(false)

const inputRapport = ref(null)

window.addEventListener('waitForRapport', async () => {
  showModalHomothetie.value = true
  await nextTick()
  if (inputRapport.value) {
    const input = inputRapport.value as HTMLElement
    input.focus()
  } 
})

function addHomothetie() {
  const event = new CustomEvent('rapportIsSet', {detail: rapport.value})
  showModalHomothetie.value = false
  window.dispatchEvent(event)
}

</script>

<template>
  <Teleport to="body">
    <modal :show="showModalHomothetie" @close="showModalHomothetie = false">
      <template #header>
       <h1 class="font-mono font-extrabold text-blue-700 text-l">Rapport de l'homothetie</h1>
      </template>
      <template #body>
        <input ref="inputRapport" v-model="rapport" v-on:keyup.enter="addHomothetie" type="number" class="border border-black rounded-lg p-1" />
      </template>
      <template #footer>
        <button class="border border-black rounded-lg p-1 mb-2" @click="addHomothetie">Valider</button>
      </template>
    </modal>
  </Teleport>
</template>