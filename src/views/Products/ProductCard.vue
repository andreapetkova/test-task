<template>
  <div class="card-container">
    <img :src="require(`@/images/${product.image}`)" />
    <!-- // single tag element with props for color and text -->
    <div class="card-description">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <!-- // if regular price === reduced prise => 1 styling else other styling -->
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
