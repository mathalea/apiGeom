<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { Figure } from "m2d/src/ts/Figure";

import Icons from './components/Icons.vue'
import Styler from './components/Styler.vue'
import ModalRadius from './components/ModalRadius.vue'
import ModalPointByCoords from './components/ModalPointByCoords.vue'
import ModalRotation from './components/ModalRotation.vue'

const figure = new Figure({
  width: window.innerWidth  - 400,
  height: window.innerHeight - 150,
});


onMounted(() => {
  const svg = document.querySelector("#svg");
  svg?.appendChild(figure.svg);
  figure.svg.style.border = "solid";
});
</script>



<template>
  <div class="flex">
    <div id="left">
      <Icons :figure="figure" />
      <Styler :figure="figure" />
    </div>
    <div id="svg"></div>
  </div>

  <ModalRadius/>
  <ModalPointByCoords/>
  <ModalRotation/>

  
</template>


