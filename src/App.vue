<template>

    <div id="app">

        <div id="nav">
          <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout </router-link> 
          <router-link v-if="authenticated" :to="{ name: 'listing', params: { idutilisateur: this.idutilisateur, authenticated: this.authenticated}}"> Liste carte </router-link>
          <router-link v-if="authenticated" :to="{ name: 'create', params: { idutilisateur: this.idutilisateur, authenticated: this.authenticated}}"> create carte </router-link>

        </div>

        <router-view @authenticated="setAuthenticated" @idutilisateur="setid" />

    </div>

</template>
<script>


export default {
  name: 'App',
  data : function(){
    return {
      idutilisateur: 0,
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
      setid(id) {
        this.idutilisateur = id;
      },
      logout() {
         this.authenticated = false;
         }
         
  }
}
</script>
