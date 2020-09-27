<template>
    <div v-if="results.length == 0">
        No images were found
    </div>
    <section v-else>
        <div v-for="(result, key) in results" :key="key">
            <img :src="result.links[0].href" />
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