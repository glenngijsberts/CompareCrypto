<template>

    <div class="chart-values">

        <div class="current-value">
            <h3>{{ this.current }}</h3>
            <h4>{{ this.currency }} Prijs in &euro;</h4>
        </div>

        <div class="change-percentage">
            <h3>{{ this.change }}%</h3>
            <h4>Koers afgelopen 24 uur</h4>
        </div>

        <div class="weekChange-percentage">
            <h3>{{ this.weekChange }}%</h3>
            <h4>Koers afgelopen week</h4>
        </div>

    </div>
  
</template>

<script>
export default {

    name: 'value',
    props: {

        currency: {default: 'Bitcoin'},
        current: {default: 0},
        change: {default: 0},
        weekChange: {default: 0}

    }

}
</script>

<style lang="scss" scoped>

    .chart-values {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 40px;
        border-bottom: 1px solid #dae1ea;
        margin-bottom: 40px;

        div {
            border-right: 1px solid #dae1ea;
            text-align: center;
            padding: 30px;
            flex: 1;

            &:last-child {
                border-right: none;
            }

            h4 {
                font-size: 14px;
                text-transform: uppercase;
                font-weight: normal;
            }

        }

    }



</style>
