var benchActions = require('../actions/benchActions');



var ApiUtil = {

  fetchBenches: function(){

    $.get(
      "api/benches",
      function(payload){
        benchActions.receiveAllBenches(payload);
      });
}};

  //
  // create: function(pokemonObject) {
  //   var pokePackage = {"pokemon": pokemonObject};
  //
  //   $.post(
  //     "api/pokemon",
  //     pokePackage,
  //     function(payload){
  //       pokemonActions.createPokemon(payload);
  //     }
  //   );
  // },
  //
  // fetchSinglePokemon: function (pokemonId) {
  //   $.get(
  //     "api/pokemon/" + pokemonId,
  //     function(payload){
  //       pokemonActions.receiveSinglePokemon(payload);
  //     }
  //   );

window.ApiUtil = ApiUtil;
module.exports = ApiUtil;
