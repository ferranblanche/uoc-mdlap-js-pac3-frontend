<template>
    <div class="comic--card">
        <p class="comic--title title__primary">{{ comic.title }}</p>
        <label class="subtitle__secondary">Characters</label>
        <div class="comic--characters">
            <div
                class="character--image"
                v-for="character in comic.characters"
                v-bind:key="character.id"
                v-bind:style="{ 'background-image': 'url(' + character.image + ')' }"
            ></div>
        </div>
        <label class="subtitle__secondary">Plot</label>
        <p class="comic--plot text__secondary">{{ comic.plot }}</p>
    </div>
</template>

<script>
export default {
    name: 'Comic',
    props: ['comic']
}
</script>

<style lang="scss" scoped>
@import '../styles/_colors.scss';

.comic--card {
    padding: 1rem;
    width: 20%;
    min-width: 22rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    > * {
        margin: 0.5rem 0;
    }
    .comic--plot{
        text-align: justify;
    }
    .comic--characters{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        .character--image {
            margin: 0 0.5rem 0.5rem 0;
            width: 3rem;
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
    }
}
</style>
