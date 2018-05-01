<template>

    <header class="hero-home charts">

            <h2 class="title">Bekijk de koersen van verschillende currencies</h2>

            <OverviewCharts />

            <div class="return-home">

                <router-link to="/">&larr; Terug naar homepagina</router-link>

            </div>

    </header>

</template>

<script>

import OverviewCharts from './Charts/OverviewCharts.vue'

export default {

    name: 'charts',
    components: {
        OverviewCharts
    }

}
</script>

<style lang="scss" scoped>

h2.title {
    font-size: 36px;
    color: white;
    text-align: center;
    padding-top: 60px;
}

.hero-home.charts {
    height: 100%;
    padding-bottom: 80px;
}

.return-home {
    text-align: center;
    padding-top: 80px;

    a {
        color: white;
    }

}

</style>
