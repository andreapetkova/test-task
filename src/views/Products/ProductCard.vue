<template>
  <div class="card-container">
    <img :src="require(`@/images/${product.image}`)" />
    <!-- // single tag element with props for color and text -->
    <span>tags new and meal deal</span>
    <h3>{{ product.name }}</h3>
    <p>{{ product.description }}</p>
    <!-- // if regular price === reduced prise => 1 styling else other styling -->
    <p>{{ product.price.regular }}</p>
  </div>
</template>

<script src="@/controllers/Products/ProductCard.ts"></script>
