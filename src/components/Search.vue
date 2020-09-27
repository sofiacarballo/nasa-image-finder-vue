<template>
  <div class="search">
    <form v-on:submit.prevent="makeRequest(query)">
      <input v-model="query">
    </form>
    <h1>
      Found images({{ numberOfImages }})
    </h1>
    <Gallery :results="results" />
  </div>
</template>

<script>
import axios from 'axios'
import Gallery from "@/components/Gallery";

export default {
  name: "Search",
  components: {
    Gallery
  },
  data() {
    return {
      numberOfImages: 0,
      query: '',
      results: []
    }
  },
  methods: {
    makeRequest(query) {
      axios
        .get('https://images-api.nasa.gov/search?media_type=image&q=' + query)
        .then(response => {
          this.results = response.data.collection.items
          this.numberOfImages = this.results.length
      })
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