<template>
  <div id="create">
<label for="cartes">Cartes: </label> 
    <input type="text" id="cartes" name="cartes" v-model="carte.nom" required><br>
    <input type="checkbox" id="brillant" name="brillant1" v-model="carte.isBrillant" >
    <label for="brillant1" > Brillance </label><br>
    <input type="checkbox" id="rare" name="rare1" v-model="carte.isRare" >
    <label for="rare1"> Rareté </label><br>
    <label for="attaque">Attaque: </label> 
    <input type="text" id="attaque" name="attaque" v-model="carte.attaque" required><br>
    <label for="Puissance">Puissance (between 1 and 100):</label>
    <input type="number" id="puissance" name="puissance1" min="1" max="100" v-model="carte.puissance" required>
    <br>
    <label for="pokemon">pokemon attaché: </label>
    <select name="pokemon" id="pokemon" v-model="carte.pokemon">
            <option v-for="p in listpokemon" v-bind:value="p.idpokemon" :key="p.idpokemon"> {{p.nom}} </option> <!-- pour chaque élément dans liste pokemon, je crée option -->
    </select>
    <br><br>
<button v-on:click="createcarte()">Ajouter</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'create',
  data() {
      return {
        listpokemon : [],
        url : "http://localhost:8000/API/pokemon",
        urlcreate : "http://localhost:8000/API/newCarte",
          carte : {
            nom : "ma carte",
            attaque : "tete",
            puissance : 50,
            isBrillant : 1,
            isRare : 0,
            proprietaire : 1,
            pokemon : 1,
          },
          error : false,
          errorMsg : "",
      }
    },
  mounted(){
    this.getpokemon()
  },
  
  methods: {
      getpokemon() {
          axios
          .get(this.url)
          .then(response => {
            this.listpokemon = response.data;
            console.log(response.data)
          })
          .catch(error => {
            console.log(error);
            });
                
      },
      createcarte(){
         axios
          .post(this.urlcreate, this.carte)
          .then(response => {
            console.log(response.data)
             this.$router.replace({ name: "listing" })
          })
          .catch(error => {
            console.log(error);
            });
      }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
