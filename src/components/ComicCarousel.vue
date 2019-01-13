<template>
    <section v-if="active" class="section--container">
        <div class="section--content ">
            <p class="carousel--title subtitle__secondary">Appears in:</p>
            <div class="carousel">
                <Comic
                    v-for="comic in comics"
                    v-bind:comic="comic"
                    v-bind:key="comic.id"
                />
            </div>
        </div>
    </section>
</template>

<script>
import Comic from "./Comic";

export default {
    name: 'ComicCarousel',
    components: {
        Comic
    },
    computed: {
        comics() {
            return this.$store.state.comics;
        },
        active() {
            return this.$store.state.selected;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/_colors.scss';
.carousel--title {
    text-align: center;
}
.carousel{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
}
</style>
