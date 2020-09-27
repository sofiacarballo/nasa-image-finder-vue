<template>
  <div id="app">
    <Search />
  </div>
</template>

<script>
import Search from './components/Search.vue'

export default {
  name: 'App',
  components: {
    Search
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font: 14px/1 "Open Sans", sans-serif;
	color:#0B3D91;
	background: #EDEDED;
}

h1 {
	margin: 20px 0;
	font-size: 24px;
	text-align: center;
}	
</style>
