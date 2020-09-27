<template>
    <div v-if="results.length == 0">
        No images were found
    </div>
    <section v-else>
        <div v-for="(result, key) in results" :key="key">
            {{ result }}
        </div>
    </section>
</template>
<script>
export default {
    name: "Gallery",
    props: {
        results: {
            type: Array,
            required: true
        } 
    } 
}
</script>