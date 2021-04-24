<template>
  <div id="app">
   <router-link to="/login" >login</router-link>
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
  data : function(){
    return {
     hidden : ""
    }
  },
  methods : {
    close : function (){
      this.hidden = true
    }
  }
}
</script>
