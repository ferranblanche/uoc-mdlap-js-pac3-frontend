import Vue from 'vue'
import Vuex from 'vuex'

// Fixtures
let searchCharactersByNameResults = require('./fixtures/searchCharactersByName.json');
let searchCharacterByIdResults = require('./fixtures/searchCharacterById.json');
let searchComicsByCharacterResults = require('./fixtures/searchComicsByCharacter.json');

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searched: '',
    selected: '',
    searchResults: searchCharactersByNameResults.data.searchCharactersByName,
    character: searchCharacterByIdResults.data.searchCharacterById,
    comics: searchComicsByCharacterResults.data.searchComicsByCharacter
  },
  mutations: {
    search (state, searched) {
      state.searched = searched;
      state.selected = "";
    },
    select (state, selected) {
      state.searched = selected.name;
      state.selected = selected.id;
    },
    restart (state) {
      state.searched = "";
      state.selected = "";
    }
  },
  actions: {

  }
})
