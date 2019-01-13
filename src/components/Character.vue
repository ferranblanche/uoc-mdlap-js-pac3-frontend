<template>
    <section v-if="active" class="section--container">
        <div class="section--content">
            <div class="character--image" v-bind:style="{ 'background-image': 'url(' + character.image + ')' }"></div>
            <div class="character--info">
                <p class="character--name title__primary">{{ character.name }}</p>
                <p class="character--description text__secondary">{{ character.description }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Character',
    computed: {
        character() {
            return this.$store.state.character;
        },
        active() {
            return this.$store.state.selected;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/_colors.scss';

.section--content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    * {
        margin: 0.5rem;
    }
    .character--image {
        width: 10rem;
        min-width: 10rem;
        max-width: 80wv;
        background-image: $color--accent__gradient;
        background-position: center;
        background-size: cover;
        border-radius: 0.25rem;
    }
    .character--image::after {
        content: "";
        display: block;
        padding-bottom: 100%;
    }
    .character--info {
        max-width: 40rem;
    }
    .character--description{
        text-align: justify;
    }
}
</style>
