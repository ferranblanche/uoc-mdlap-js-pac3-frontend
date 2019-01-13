<template>
  <section v-if="active" class="section--container">
    <div class="section--content">
      <p class="section--title subtitle__secondary">You might be looking for:</p>
      <ul class="search--results">
        <li
          class="search--result title__primary"
          v-for="result in searchResults"
          v-bind:key="result.id"
          v-on:click="select(result)"
        >{{result.name}}</li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "SearchResults",
  computed: {
    active() {
      return this.$store.state.searched && !this.$store.state.selected;
    },
    searchResults() {
      return this.$store.state.searchResults;
    },
    searched() {
      return this.$store.state.searched;
    }
  },
  methods: {
    ...mapMutations(["select"])
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/_colors.scss";
.section--title {
  text-align: center;
}
.search--result {
  text-align: center;
  padding: 1rem;
}
.search--result:hover {
  color: $color--accent__primary;
  cursor: pointer;
}
</style>
