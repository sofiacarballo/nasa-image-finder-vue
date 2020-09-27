<template>
  <div class="search">
    <form v-on:submit.prevent="makeRequest(query)">

    </form>
    <span>
      Found images({{ numberOfImages }})
    </span>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      numberOfImages: 0
    }
  },
  methods: {
    makeRequest(query) {
      this.numberOfImages = query.length
    }
  }
}
</script>