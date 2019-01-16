<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div @click="routerpush">{{count}}</div>
    <!--<openlayers/>-->
    <div>
      <input type='button' @click="buttonClick" value='click'/>
      <div  @click="buttonClick">
        CLICK
      </div>
    </div>
  </div>
</template>

<script>
  import openlayers from './openlayers.vue'

  export default {
    name: 'HelloWorld',
    components: {
      openlayers
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        count: 1
      }
    },
    methods: {
      routerpush(){
        // window.location.href='/openlayers'
        this.$router.push('/openlayers')
      },

      buttonClick () {
        console.log('sssss')
        this.$store.commit('SET_USERID','123@#13123')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
