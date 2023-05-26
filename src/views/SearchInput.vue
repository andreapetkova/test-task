<template>
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
</template>

<script src="../controllers/SearchInput.ts"></script>
