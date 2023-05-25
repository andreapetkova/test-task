<template>
  <div class="product-list">
    <product-card
      v-for="product in products"
      :key="product.id"
      :product="product"
    ></product-card>
  </div>
</template>

<script src="@/controllers/Products/ProductsList.ts"></script>
