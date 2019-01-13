<template>
    <section class="section--container">
        <form id="character--search" action="" class="section--content" v-on:submit.prevent="">
            <input type="text" v-model="searchInput" name="character--search--name" id="character--search--name" placeholder="Search by character…" autofocus>
            <button v-if="searchInput" type="submit" v-on:click="search(searchInput)">
                <font-awesome-icon icon="arrow-right" />
            </button>
            <button v-if="searchInput" type="reset" v-on:click="reset">
                <font-awesome-icon icon="times" />
            </button>
        </form>
    </section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'SearchBar',
    props: ['searchInput'],
    computed: {
        searched() {
            return this.$store.state.searched;
        }
    },
    methods: {
        ...mapMutations(['search']),
        reset: () => {
            this.$props.searchInput = "";
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/_colors.scss';

#character--search{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    > * {
        font-size: 1.5rem;
        color: $color--text__primary;
        font-weight: bolder;
        padding: 0.5rem;
    }
    input {
        width: 20rem;
        max-width: 60vw;
    }
    #character--search--name {
        margin-right: 0.5rem;
    }
    button:hover {
        color: $color--accent__primary;
    }
}
</style>
