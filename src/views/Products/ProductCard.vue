<template>
  <div class="card-container" :class="{ disabled: !isAvailable }">
    <img :src="require(`@/images/${product.image}`)" />
    <!-- // tags for deals -->
    <span class="tag new" v-if="product.new">New</span>
    <span class="tag deal" v-if="product.sale">Meal Deal</span>
    <div class="card-description">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>

      <!-- // price -->
      <p class="price" v-if="product.price.regular === product.price.current">
        ${{ product.price.regular }}
      </p>
      <p class="price" v-else>
        ${{ product.price.current }}
        <span class="price-reduced">${{ product.price.regular }}</span>
      </p>
    </div>
  </div>
</template>

<script src="@/controllers/Products/ProductCard.ts"></script>

<style lang="scss" scoped>
@import "@/assets/scss/components/product-card.scss";
</style>
