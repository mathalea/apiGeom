<script setup lang="ts">
import { ref, nextTick } from 'vue'
import Modal from './Modal.vue'

const x = ref(0)
const y = ref(0)
const showModalPointByCoords = ref(false)

const inputX = ref(null)

window.addEventListener('waitForCoords', async () => {
  showModalPointByCoords.value = true
  await nextTick()
  if (inputX.value) inputX.value.focus()
})

function addPoint() {
  const event = new CustomEvent('coordsAreSet', {detail: {x: x.value, y: y.value}})
  showModalPointByCoords.value = false
  window.dispatchEvent(event)
}

</script>

<template>
  <Teleport to="body">
    <modal :show="showModalPointByCoords" @close="showModalPointByCoords = false">
      <template #header>
       <h1 class="font-mono font-extrabold text-blue-700 text-l">Coordonnées du nouveau point</h1>
      </template>
      <template #body>
        <div>
          <label>x : </label><input ref="inputX" v-model="x" v-on:keyup.enter="addPoint" type="number" class="border border-black rounded-lg p-1" />
        </div>
        <div>
          <label>y : </label><input  v-model="y" v-on:keyup.enter="addPoint" type="number" class="border border-black rounded-lg p-1" />
        </div>
      </template>
      <template #footer>
        <button class="border border-black rounded-lg p-1 mb-2" @click="addPoint">Valider</button>
      </template>
    </modal>
  </Teleport>
</template>