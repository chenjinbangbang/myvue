<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--<v-button type="primary">button</v-button>
    <v-rate v-model="star" @change="_change"></v-rate>-->
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        star: 1
      }
    },
    methods: {
      _change(val) {
        console.log('selected:' + val);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
</style>
