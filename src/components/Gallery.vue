<template>
    <div v-if="results.length == 0">No images were found</div>
</template>
<script>
export default {
    name: "Gallery",
    props: {
        results: {
            type: Array,
            default: function() {
                return []
            }
        } 
    } 
}
</script>