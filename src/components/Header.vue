<template>
    <header class="section--container">
        <div class="section--content">
            <p id="marvelpedia--logo" v-on:click="restart"><span>marvel</span>pedia</p>
        </div>
    </header>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'Header',
    methods: {
        ...mapMutations(['restart'])
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/_colors.scss';

#marvelpedia--logo {
    text-transform: uppercase;
    font-weight: bolder;

    span {
        margin: 0.25rem;
        padding: 0.25rem;
        border-radius: 0.15rem;
        background-image: $color--accent__gradient;
    }
}
</style>
