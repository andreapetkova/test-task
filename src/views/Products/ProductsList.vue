<template>
  <div>
    <search-input
      @toggle-checkbox="toggleCheckbox"
      @update-search="setSearchString"
    ></search-input>
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
