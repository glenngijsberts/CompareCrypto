<template>
  
    <div class="tabs-charts mt-5">

    <nav>
        <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
            <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Bitcoin</a>
            <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Ether</a>
            <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Ripple</a>
        </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

            <Value currency="Bitcoin" /> 
            
             <line-chart :data="this.btc.chartData" :options="this.options"></line-chart>

        </div>
        <div class="tab-pane" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">

            <Value currency="Ether" /> 

            <line-chart :data="this.eth.chartData" :options="this.options"></line-chart>

        </div>
        <div class="tab-pane" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">

            <Value currency="Ripple" /> 

            <line-chart :data="this.xrp.chartData" :options="this.options"></line-chart>

        </div>
    </div>

    </div>

</template>

<script>

import LineChart from './LineChart'
import Value from './Value.vue'

export default {

    name: 'OverviewCharts',
    components: {
        LineChart,
        Value,
    },

    data() {
        return {

            btc: {
                chartData: {
                    labels: ["28/1", "29/1", "30/1", "31/1", "1/2", "2/2", "3/2"],
                    datasets: [{
                        backgroundColor: '#59a4eca1',
                        borderColor: '#2F72AF',
                        data: [9500, 9600, 9700, 9000, 9100, 8900, 9300],
                    }]
                }
            },

            eth: {
                chartData: {
                    labels: ["28/1", "29/1", "30/1", "31/1", "1/2", "2/2", "3/2"],
                    datasets: [{
                        backgroundColor: '#ecbf599e',
                        borderColor: '#e47d13',
                        data: [900, 980, 960, 960, 970, 980, 1000],
                    }]
                }
            },

            xrp: {
                chartData: {
                    labels: ["28/1", "29/1", "30/1", "31/1", "1/2", "2/2", "3/2"],
                    datasets: [{
                        backgroundColor: '#ec59596b',
                        borderColor: '#d43434',
                        data: [1.00, 1.20, 1.05, 1.00, 1.00, 1.00, 1.08],
                    }]
                }
            },

            options: {
                responsive: true, 
                maintainAspectRatio: false, 
                legend: { 
                    display: false, 
                    labels: { defaultFontFamily: "'Rubik', 'Source Sans Pro'" }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            fontColor: "rgba(0,0,0,0.5)",
                            fontStyle: "bold",
                            maxTicksLimit: 5,
                            padding: 20
                        },
                        gridLines: {
                            drawTicks: false,
                            display: false
                        }
                     }],
                    xAxes: [{
                        gridLines: {
                            drawTicks: false,
                            display: false
                        },
                        ticks: {
                            padding: 20,
                            fontColor: "rgba(0,0,0,0.5)",
                            fontStyle: "bold"
                        }
                    }]
                }
            }

        }
    }

}
</script>

<style lang="scss" scoped>

    .tabs-charts {
        max-width: 1000px;
        margin: 0px auto;

        box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
        background-color: #FFFFFF;
        border-radius: 4px;
        border: 1px solid #DAE1E9;
        font-family: 'Rubik', sans-serif;

        .nav-tabs {

            .nav-link {
                color: darken(#DAE1E9, 25%);
                border: none;
                border-bottom: 2px solid #DAE1E9; 
                font-weight: 500;
                text-transform: uppercase;
                padding: 20px;
            }

        }

    }

    .nav-tabs .nav-link.active, .nav-tabs .nav-link:focus,  {
        color: var(--light);
        background-color: transparent;
        border: none;
        border-bottom: 2px solid var(--light);
    }

    .nav-tabs .nav-link:hover,  {
        border: none;
        border-bottom: 2px solid darken(#DAE1E9, 25%);
    }

    .tab-content {
        min-height: 400px;
        padding: 40px;
        color: darken(#DAE1E9, 25%);
    }   

</style>