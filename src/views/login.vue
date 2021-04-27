<template>
    <div id="login">
        <h1>Login</h1>
         <input type="email" name="email" v-model="input.email" placeholder="email" />
        <input type="text" name="uname" v-model="input.uname" placeholder="Username" />
        <input type="password" name="psw" v-model="input.psw" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
    <div v-if="error">
      {{errorMsg}}
    </div>
    </div>
</template>

<script>
import axios from "axios";
    export default {
        name: 'login',
        data() {
            return {
                input: {
                    uname: "",
                    psw: "",
                    email:"",
                },
                error : false,
                errorMsg : "",
            }
        },
        methods: {
            login() {
                if(this.input.uname != "" && this.input.psw != "") {
                      axios
                .post("http://localhost:8000/API/logon", this.input)
                .then(response => {
                    console.log(response)
                  this.errorMsg = response.data.error;
                  if(this.errorMsg){
                    this.error = true 
                  }
                  else{
                    this.$router.replace({ name: "create" })
                  }
                })
                .catch(error => {
                  console.log(error);
                  });
                      
                } else {
                    console.log("A username and password must be present");
                }
            },
        }
    }
</script>

<style scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: #FFFFFF;
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>