<template>

<section class="content" v-if="inventory">
    <router-link class="product" v-for="(product, i) in inventory" :key="i" :to="{name: 'product', params: {id: product.name}}" >
            <img class="card-img-top" :src="require(`@/assets/img/450/${product.photo}`)" :alt="product.name" />
           <div class="details">
                <h3>
                    {{ product.name }}
                </h3>
                <div>{{ product.category }}</div>
                <sub><b>{{ product.price }}</b>cad</sub>
                <span>See more...</span>
           </div>
    </router-link>
</section>
<section class="noContent" v-else>
  <div>No product</div>
  <router-link class="nav-link" :to="{name: 'new-product'}">add a new product</router-link>
</section>
</template>

<script>
export default {
  props: ['inventory']
}
</script>
