<script>
import { state } from './state'
import AppMain from './components/AppMain.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  data() {
    return {
      state
    };
  },
  components: { AppMain, AppHeader }
}
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
</template>

<style scoped>
li {
  padding: 1rem 0;
}
</style>
