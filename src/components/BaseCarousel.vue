<script setup>
import BaseCard from 'components/BaseCard.vue'
import { ref } from 'vue'

const items = ref([
  {
    id: 1,
    name: 'Soap',
    price: 10.2,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata',
  },
  {
    id: 2,
    name: 'Courtain',
    price: 20.99,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata',
  },
  {
    id: 3,
    name: 'Shoes',
    price: 15.5,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata',
  },
  {
    id: 4,
    name: 'Motorcycle',
    price: 1200,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata',
  },
  {
    id: 5,
    name: 'Smart Tv',
    price: 259.6,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata',
  },
  {
    id: 6,
    name: 'Asus ROG G15',
    price: 1830.5,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata',
  },
])
</script>

<template>
  <div class="section-area">
    <div class="uk-container">
      <div class="uk-grid uk-grid-match uk-child-width-1-1 uk-child-width-1-3@m">
        <div v-for="item in items" :key="item.id">
          <BaseCard
            :title="item.name"
            :description="item.description"
            :price="item.price"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section-area {
  padding: 140px 0;
}
</style>
