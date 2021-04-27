<template>
  <div id="listing">
<h1>Liste des pokemons</h1>
<a href="/collectionCarte">créer une carte</a>
<a href="/logout">logout</a>
<table style="width:100%">
    <tr>
        <th>Nom</th>
        <th>puissance</th>
        <th>attaque</th>
        <th>Brillant</th>
        <th>Rare</th>
        <th>pokemon Attaché</th>
        <th>modifier</th>
        <th>supprimer</th>
    </tr>
    <tr v-for="c in listcarte" v-bind:value="c.idcarte" :key="c.idcarte">
      <th><input type="text" name="cartenom" v-model="c.nomcarte"></th>
      <th><input type="number" min="1" max="100" name="puissance" v-model="c.puissance" ></th>
      <th><input type="text" name="attaque" v-model="c.attaque"></th>
      <th><input type="checkbox" id="brillant" name="brillant1" v-model="c.isBrillant" >
    
      </th>
      <th><input type="checkbox" id="rare" name="rare1" v-model="c.isRare" >
         </th>
      <th>
          <select name="pokemon" id="pokemon" v-model="carte.pokemon">
            <option v-for="p in listpokemon" v-bind:value="p.idpokemon" :key="p.idpokemon"> {{p.nom}} </option> <!-- pour chaque élément dans liste pokemon, je crée option -->
    </select>
      </th>
      <th><button name="update" value="update">update</button></th>
      <th><button name="delete" value="delete" v-on:click="deletecarte (c.idcarte) ">delete</button></th>
      <th><input type="hidden" name="idpokemon" v-model="c.idpokemon"></th>
    </tr>
  </table>
    
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'listing',
    data() {
      return {
        listpokemon : [],
        listcarte: [],
        url: "http://localhost:8000/API/listCarte",
        urldelete: "http://localhost:8000/API/listCarte/",
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
            this.listpokemon = response.data.pokemons;
            this.listcarte = response.data.listCarte;
            console.log(this.listcarte)
            console.log(this.listpokemon)
          })
          .catch(error => {
            console.log(error);
            });
                
      },
      deletecarte(idcarte){
         axios
          .delete(this.urldelete + idcarte)
          .then(response => {
            console.log(response.data)
            this.$router.push({ name: "listing" })
          })
          .catch(error => {
            console.log(error);
            });
      }
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
