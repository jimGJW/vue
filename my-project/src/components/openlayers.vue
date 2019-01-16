<template>
  <div>123</div>
</template>
<script>
  import Vue from "vue"
  import {mapGetters} from 'vuex';
  export default {
    name:'openlayers',
    computed: {
      ...mapGetters([
        'userId'
      ])
    },
    created(){
      console.log(this.userId,'userId')
    }
  }
</script>
 <style lang="css">
</style>
