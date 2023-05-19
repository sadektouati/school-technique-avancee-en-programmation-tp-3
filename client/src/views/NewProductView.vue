<template>

  <form className="add-form" @submit.prevent="saveProduct">

      <div class="alert alert-danger" v-show="message">{{ message }}</div>

      <div className="form-control">
        <label>Image</label>
        <select value={image}
        v-model="product.photo">
        <option value="" selected disabled></option>
        <option v-for="(image, index) in images" :key="index">{{ image }}</option>
        </select>
    </div>

    <div className="form-control">
        <label>category</label>
        <select
        v-model="product.category"
        >
        <option value="" selected disabled></option>
        <option v-for="(category, index) in categories" :key="index">{{ category }}</option>
        </select>
    </div>

    <div className="form-control">
        <label>Product name</label>
        <input
        type="text"
        placeholder="Product name"
        v-model="product.name"
        />
    </div>
    <div class="invalid-feedback">Valid name is required.</div>
    <div className="form-control">
        <label>Price</label>
        <input
        type="number"
        placeholder="Price of the product"
        v-model="product.price"
        min="0"
        />
    </div>

    <div className="form-control">
        <label>Description</label>
        <textarea rows="4"
        placeholder="Product description"
        v-model="product.description"></textarea>
    </div>

    <button className="btn">add {{ product.name }}</button>

  </form>

</template>

<script>
import ProductDataService from '@/services/ProductDataService'

export default {
  props: ['addInv'],
  data () {
    return {
      message: null,
      product: {},
      categories: this.$root.categories,
      images: this.$root.images
    }
  },
  methods: {
    saveProduct () {
      ProductDataService.create(this.product)
        .then(() => {
          this.$root.refreshInventory()
          this.$router.push({ name: 'home' })
        })
        // .catch(e => {
        //   this.message = e.response.data.message
        // })
    }
  }
}
</script>
