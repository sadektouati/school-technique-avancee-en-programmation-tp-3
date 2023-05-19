<template>
        <header>
          <h1>
            <router-link class="nav-link active" aria-current="page" :to="{name: 'home'}">Our products</router-link>
          </h1>
          <router-link class="nav-link" :to="{name: 'about'}">About</router-link> <router-link class="nav-link" :to="{name: 'new-product'}">New Product</router-link>
        </header>
        <Router-view
        :inventory = "inventory"
        :addTo = "addToCart"
        :addInv = "addInventory"
        :removeInv = "removeInventory"
        :remItem = "removeItem"
        :updateInv = "updateInventory"
        />
</template>

<script>
import ProductDataService from '@/services/ProductDataService'

const images = require.context(
  '@/assets/img/100',
  true,
  /^.*$/
)

export default {
  data: () => {
    return {
      inventory: [],
      cart: {},
      categories: ['categorie1', 'categorie2'],
      images: images.keys().map(element => element.replace('./', '')).sort()
    }
  },
  methods: {
    refreshInventory () {
      ProductDataService.getAll()
        .then(response => {
          this.inventory = response.data
        })
    }
  },
  mounted () {
    this.refreshInventory()
  }
}
</script>
