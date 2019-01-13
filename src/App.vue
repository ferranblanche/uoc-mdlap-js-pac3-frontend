<template>
  <div id="app">
    <Header />
    <SearchBar />
    <SearchResults />
    <Character />
    <ComicCarousel />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import Character from "./components/Character";
import ComicCarousel from './components/ComicCarousel';
import Footer from "./components/Footer";

export default {
  name: 'app',
  components: {
    Header,
    SearchBar,
    SearchResults,
    Character,
    ComicCarousel,
    Footer
  }
}
</script>

<style lang="scss">
@import './styles/_reset.scss';
@import './styles/_colors.scss';
@import './styles/_fonts.scss';
@import './styles/_structures.scss';
@import './styles/_texts.scss';

#app {
  min-height: 110vh;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: $color--background;
  font-family: $font--primary;
  color: $color--text__primary;
}
</style>
