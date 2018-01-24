<template>
  
    <header class="hero-home">

        <div class="home-hero">

            <h1 class="site-title">Digitale valuta's vergelijken</h1>

            <p class="site-description">Cryptocoin is dé tool om de grotere cryptocurrencies met elkaar te vergelijken, met óf zonder account!</p>

            <Subscribe />

        </div>

    </header>


</template>

<script>

import Subscribe from './Subscribe.vue'

export default {

    name: 'hero',
    components: {
        Subscribe
    }

}
</script>

<style>

</style>
