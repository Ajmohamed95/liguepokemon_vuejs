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
    <tr>
      <th><input type="text" name="cartenom" ></th>
      <th><input type="number" min="1" max="100" name="puissance" ></th>
      <th><input type="text" name="attaque" ></th>
      <th><select name="isBrillant" id="Brillant">
    
      </select></th>
      <th><select name="isRare" id="Rare">
        
          </select></th>
      <th>
          <select name="pokemonattache" id="pokemon">
        
         </select>
      </th>
      <th><button name="update" value="update">update</button></th>
      <th><button name="delete" value="delete">delete</button></th>
      <th><input type="hidden" name="idpokemon" value="<%= listCarte[i].idpokemon %>"></th>
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
        url : "http://localhost:8000/API/pokemon",
        urlcartes: "http://localhost:8000/API/newCarte",
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
