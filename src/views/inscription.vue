<template>
  <div id="inscription">
<h1>Inscription</h1>

    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" v-model="user.uname" required>

    <label for="email">Enter your email:</label>
    <input type="email" placeholder="Enter Mail" id="email" name="email" v-model="user.email" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" v-model="user.psw" required>

    <button v-on:click="inscription()">s'inscrire</button>
    <div v-if="error">
      {{errorMsg}}
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: 'inscription',
    data() {
      return {
        url: "http://localhost:8000/API/inscription",
          user:{
            uname:"",
            email:"",
            psw:"",  
          },
          error : false,
          errorMsg : "",
      }
    },

  methods: {
      inscription() {
          axios
          .post(this.url,this.user) 
          .then(response => {
            console.log(response.data)
            this.errorMsg = response.data.error;
            if(this.errorMsg){
                    this.error = true 
                  }
                  else{
                    this.$router.replace({ name: "login" })
                  }
          })
          .catch(error => {
            console.log(error);
            });
        
                
      },

  }

  }

</script>

<style>
#listing {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
