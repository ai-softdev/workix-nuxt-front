<script setup lang="ts">

</script>

<template>
  <button class="flex items-center justify-center w-9 h-9 !rounded-xl !border"><slot/></button>
</template>

<style scoped>
.tree-button {
  position: relative;
  border: none;
  font-size: 28px;
  padding: 5px 0;
  width: 70px;
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
}
.tree-button:after {
  content: "";
  display: block;
  position: absolute;
  padding-top: 300%;
  padding-left: 350%;
  margin-left: -20px!important;
  margin-top: -120%;
  opacity: 0;
  transition: all 0.8s
}

.tree-button:active:after {
  padding: 0;
  margin: 0;
  opacity: 1;
  transition: 0s
}
</style>