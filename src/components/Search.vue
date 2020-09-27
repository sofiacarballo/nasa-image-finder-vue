<template>
  <div class="search">
    <form v-on:submit.prevent="makeRequest(query)">
      <input v-model="query">
    </form>
    <h1>
      Found images({{ numberOfImages }})
    </h1>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      numberOfImages: 0,
      query: ''
    }
  },
  methods: {
    makeRequest(query) {
      this.numberOfImages = query.length
    }
  }
}
</script>

<style scopped scss>
  .search {
    text-align: center;
    margin: 200px;
  }
  .search input {
    padding: 6px;
    margin-bottom: 12px;
    font-size: 18px;
    color: #FC3D21;
  }
</style> 