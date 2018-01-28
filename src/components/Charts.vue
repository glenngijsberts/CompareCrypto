<template>

    <header class="hero-home">

            <h2 class="title">Bekijk de koersen van verschillende currencies</h2>

            <OverviewCharts />

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

<style scoped>

h2.title {
    font-size: 36px;
    color: white;
    text-align: center;
    padding-top: 60px;
}

</style>
