<template>
  <div class="search">
    <form v-on:submit.prevent="makeRequest()">

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
    makeRequest() {
      this.numberOfImages = 33
    }
  }
}
</script>