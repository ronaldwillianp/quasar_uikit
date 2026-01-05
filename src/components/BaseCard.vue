<script setup>
defineProps({
  title: {
    type: String,
    default: 'Card Title'
  },
  description: {
    type: String,
    default: 'No description'
  },
  price: {
    type: Number,
    default: 0.00
  }
})
</script>

<template>
<div class="uk-card uk-card-small uk-card-body uk-card-default uk-card-hover uk-margin-bottom">
  <h3>{{title}}</h3>
  <p>${{price.toFixed(2)}}</p>
  <p>{{description}}</p>
</div>
</template>

<style scoped>

</style>
