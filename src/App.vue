<script>
// import JSON from './components/JSON.vue';
// import FORM from './components/Form.vue';
// import JSONLab from './components/JSONLab.vue'
import BHeader from './components/BHeader.vue'
import CountBookAPI from './views/CountBookAPI.vue';

export default {
  name: 'App',
  components: {
    BHeader,
    CountBookAPI
  },
  computed: {
    showHeader() {
      return this.$route.name !== 'CountBookAPI';
    }
  }
};
</script>

<template>
  <div class="main-container">
    <!--  -->
    <header v-if="showHeader">
      <BHeader />
    </header>

    <main class="main-box">
      <!-- <LibraryRegistrationForm /> -->
      <!-- <JSONLab /> -->
      <router-view></router-view>
    </main>
  </div>
<!-- <JSON></JSON> -->
<!-- <FORM></FORM> -->
</template>
