<template>

    <div id="app">

        <div id="nav">

            <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout </router-link>

            <router-link v-if="authenticated" to="/listing"> Liste carte </router-link>

            <router-link v-if="authenticated" to="/create"> Create carte </router-link>

        </div>

        <router-view @authenticated="setAuthenticated" />

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
    hidden : "",
    authenticated: false,
    }
  },

  mounted() {
      if(!this.authenticated) {
      this.$router.replace({ name: "login" });
            }

        },

  methods : {
      setAuthenticated(status) {
        this.authenticated = status;
      },

      logout() {
         this.authenticated = false;
         }
  }
}
</script>
