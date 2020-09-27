<template>
  <div>
    Found images({{ numberOfImages }})
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      numberOfImages: 0
    }
  }
}
</script>