<template>
    <section class="oneProduct" v-if="product">
        <img :src="require(`@/assets/img/600/${product.photo}`)" :alt="product.name" />
        <div>
          <sup>Code: {{ product.id }}</sup>
          <h1 class="display-5 fw-bolder">{{ product.name }}</h1>
          <span>$ {{ product.price }}</span>
          <p>{{ product.description }}</p>
          <router-link class="btn edit"  :to="{name: 'edit-product', params: {id: product.id} }">Edit</router-link>
          <button class="btn delete" @click="deleteProduct">Delete</button>
        </div>
    </section>
</template>

<script>
import ProductDataService from '@/services/ProductDataService'

export default {
  props: ['inventory', 'addTo'],
  methods: {
    deleteProduct () {
      ProductDataService.delete(this.product.id)
        .then((response) => {
          this.$root.refreshInventory()
          this.$router.push({ name: 'home' })
        })
    }
  },
  computed: {
    product () {
      const product = this.inventory.find((p) => {
        return p.name === this.$route.params.id
      })
      return product
    },
    productIndex () {
      const index = this.inventory.findIndex((p) => {
        return p.name === this.$route.params.id
      })
      return index
    }
  }
}
</script>
