<script setup lang="ts">
import { ref, computed } from 'vue'
import { Figure } from "m2d/src/ts/Figure"
import { translateButton } from './translateButtons'

const props = defineProps<{
  figure: Figure
}>()

const searchText = ref('')

// const drag = ['drag', 'nommerPoint', 'setOptions', 'cacher', 'supprimer']
const drag = ['drag', 'setOptions', 'cacher', 'supprimer']
const points = ['pointLibre', 'pointSur', 'pointIntersection', 'pointMilieu', 'pointCoordonnees']
// const traits = ['segment', 'droite', 'demiDroite', 'vecteur', 'polygone']
const traits = ['segment', 'droite', 'demiDroite', 'polygone']
const droitesParticulieres = ['droiteParallele', 'droitePerpendiculaire', 'mediatrice', 'bissectrice']
const cercles = ['cerclePoint', 'cercleRayon', 'cercleCompas', 'polygoneRegulier']
const transformations = ['symetrieAxiale', 'symetrieCentrale', 'translation', 'rotation', 'homothetie']
// const affichages = ['mesureLongueur', 'mesureAngle', 'marqueSegment', 'marqueAngle']
const affichages = ['marqueAngle']

function filtreListe(liste: string[]) {
 if (searchText.value.length === 0) return liste
  return liste.filter((icone) => {
    return icone.toLowerCase().includes(searchText.value.toLowerCase().replace(/é|è|ê/g, 'e'))
  })
}

const filteredDrag = computed(() => { return filtreListe(drag)})
const filteredPoints = computed(() => { return filtreListe(points)})
const filteredTraits = computed(() => { return filtreListe(traits)})
const filteredDroitesParticulieres = computed(() => { return filtreListe(droitesParticulieres)})
const filteredCercles = computed(() => { return filtreListe(cercles)})
const filteredTransformations = computed(() => { return filtreListe(transformations)})
const filteredAffichages = computed(() => { return filtreListe(affichages)})

const listes = computed(() => [filteredDrag.value, filteredPoints.value, filteredTraits.value, filteredDroitesParticulieres.value, filteredCercles.value, filteredTransformations.value, filteredAffichages.value] ) 
const selectedIcon = ref('drag')

function toggleState (name: string) {
  selectedIcon.value = name
  props.figure.pointerAction = translateButton(name)
}


</script>

<template>
<h1 class="font-mono font-extrabold text-blue-700 text-xl">apiGeom</h1>
<input v-model="searchText" type="search" autocomplete="off" placeholder="Rechercher..."
  class="border-2 mb-2 w-60 "
 >
<ul v-for="(liste, index) of listes" :key='index'>
  <li class="inline" v-for="name of liste" :key='name' >
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
      w-12
    "
    :class="{'bg-slate-100 border-blue-600 shadow-2xl' : (selectedIcon === name)}"
    :src="`/svg/${name}.svg`"
    @click="toggleState(name)"
  />
  </li>
</ul>
  
</template>

