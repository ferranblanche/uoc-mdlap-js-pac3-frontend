<template>
    <footer class="section--container">
        <div class="section--content">
            <hr>
            <p class="text__secondary">Data provided by Marvel. © 2018 MARVEL<br>Coded by Ferran Blanché Xandri — fblanche@uoc.edu<br>Javascript per a Programadors — UOC — 2018/19</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'    
}
</script>


<style lang="scss" scoped>
@import '../styles/_colors.scss';

.section--content {
    hr {
        width: 3rem;
        margin: 2rem auto;
    }
    p {
        text-align: center;
    }
}
</style>
