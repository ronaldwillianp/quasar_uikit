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
import { provide } from 'vue'
import UIkit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'
import { slideshow } from 'uikit/dist/js/uikit.js'

// Inicializar UIKit
UIkit.use(Icons)
UIkit.use(slideshow)

// Proveer UIKit a componentes hijos si es necesario
provide('uikit', UIkit)
</script>

<style scoped>

</style>
