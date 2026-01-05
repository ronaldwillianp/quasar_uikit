<!-- layouts/UikitLayout.vue -->
<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import 'uikit/dist/css/uikit.min.css'
import { onMounted, provide } from 'vue'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

// Inicializar UIKit
UIkit.use(Icons)

// Proveer UIKit a componentes hijos si es necesario
provide('uikit', UIkit)

// Opcional: Inicializar componentes que necesiten JS
onMounted(() => {
  // UIKit se auto-inicializa automáticamente
  // Pero puedes forzar inicialización si es necesario
  console.log('UIKit inicializado', UIkit.version)
})
</script>

<style scoped>

</style>
