<template>
  <div class="search-container">
    <input
      class="search-input"
      type="text"
      v-model="searchString"
      placeholder="Search ..."
      @input="updateSearchString"
    />
    <div class="checkbox">
      <input type="checkbox" v-model="isChecked" @change="toggleCheckbox" />
      <label>Show only available</label>
    </div>
  </div>
</template>

<script src="@/controllers/Products/SearchInput.ts"></script>

<style lang="scss" scoped>
@import "@/assets/scss/components/search-input.scss";
</style>
