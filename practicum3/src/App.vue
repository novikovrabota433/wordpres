<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  background: #E3F2FD;
  margin: 0;
}

.nav-wrapper{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.nav-wrapper > h4{
  margin-left: 10px;
}

.autorisation{
  display: flex;
}
.autorisation > h4{
  margin-right: 10px;
}
</style>
