<template>
  <div>
    <div class="search-container">
      <input
        class="search-input"
        type="text"
        v-model="searchString"
        placeholder="Search ..."
      />
      <div class="checkbox">
        <input type="checkbox" v-model="availableProducts" />
        <label>Show only available</label>
      </div>
    </div>
    <div class="product-list">
      <product-card
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
        :isAvailable="product.new || product.sale"
      ></product-card>
    </div>
  </div>
</template>

<script src="@/controllers/Products/ProductsList.ts"></script>

<style lang="scss" scoped>
@import "@/assets/scss/components/products-list.scss";
</style>
