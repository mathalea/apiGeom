<script setup lang="ts">
import { Figure } from 'm2d/src/ts/Figure'
import { ref } from "vue"

const props = defineProps<{
  figure: Figure
}>()

// ToFix il faut avoir les réglages par défaut
const thickness = ref(1)
const selectedColor = ref('black')
const dashed = ref(false)

function updateThickness(e: number) {
    props.figure.pointerSetOptions.thickness = e
}
function updateColor(e: string) {
    selectedColor.value = e
    props.figure.pointerSetOptions.color = e
}

function updateDashed() {
 dashed.value = !dashed.value
 props.figure.pointerSetOptions.dashed = !props.figure.pointerSetOptions.dashed
}

</script>

<template>
   <div class="w40 ml-4">
  <p class="font-semibold text-slate-800 mt-2">Épaisseur</p>

  
  <input type="range" v-model="thickness" min="1" max="6" class="w-32 mr-2"
  @change="updateThickness(thickness)" />
  <span>{{ thickness }}</span>
  
  <p class="font-semibold text-slate-800 mt-2">Couleur</p>
  <div class="mt-2 grid grid-cols-3 gap-3 grid-rows-2 w-32">
    <div 
      class= "cursor-pointer rounded bg-[black]"
      :class="[('black' === selectedColor) ? 'w-6 h-6 shadow-2xl' : 'w-4 h-4' ]"
      @click="updateColor('black')">
    </div>
    <div 
    class= "cursor-pointer rounded bg-[blue]"
      :class="[('blue' === selectedColor) ? 'w-6 h-6 shadow-2xl' : 'w-4 h-4' ]"
      @click="updateColor('blue')">
    </div>
    <div 
      class= "cursor-pointer rounded bg-[green]"
      :class="[('green' === selectedColor) ? 'w-6 h-6 shadow-2xl' : 'w-4 h-4' ]"
      @click="updateColor('green')">
    </div>
    <div 
      class= "cursor-pointer rounded bg-[red]"
      :class="[('red' === selectedColor) ? 'w-6 h-6 shadow-2xl' : 'w-4 h-4' ]"
      @click="updateColor('red')">
    </div>
    <div 
     class= "cursor-pointer rounded bg-[purple]"
      :class="[('purple' === selectedColor) ? 'w-6 h-6 shadow-2xl' : 'w-4 h-4' ]"
      @click="updateColor('purple')">
    </div>
    <div 
      class= "cursor-pointer rounded bg-[gray]"
      :class="[('gray' === selectedColor) ? 'w-6 h-6 shadow-2xl' : 'w-4 h-4' ]"
      @click="updateColor('gray')">
    </div>
    
  </div>
  <p class="font-semibold text-slate-800 mt-2">Style</p>
  <div class="mt-2 grid grid-cols-2 gap-3 grid-rows-1 w-32">
    <img class="cursor-pointer" :class="{ 'bg-slate-200': dashed }" 
      src="/png/traitTrait.png"
      @click="updateDashed()"
    />
    <img class="cursor-pointer" :class="{ 'bg-slate-200': !dashed }"
      src="/png/traitContinu.png"
      @click="updateDashed()" 
    />
  </div>

  </div>
</template>
