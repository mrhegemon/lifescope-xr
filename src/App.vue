<template>
  <div id="app">
    <aframe-scene></aframe-scene>
    <hud v-if="sceneLoaded && !inVR"></hud>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import axios from 'axios';

import aframeScene from './scene.vue';
import hud from './components/hud/hud.vue';

export default {
    components: {
        aframeScene,
        hud
    },

    computed: {
      ...mapState('xr',
      [
        'inVR',
        'sceneLoaded',
        'isMobile',
      ])
    }
}
</script>