<template>
  
      <section class="top-currencies">

        <div class="container">
            <div class="row">

                <div class="col-sm">
                    <div class="top-currency">

                        <h3 class="currency-price">&euro; {{ btc }} </h3>
                        <h3 class="currency-name">Bitcoin in {{ valuta }}</h3>

                    </div>
                </div>

                <div class="col-sm">

                    <div class="top-currency">

                        <h3 class="currency-price">&euro; {{ eth }}</h3>
                        <h3 class="currency-name">Ether in {{ valuta }}</h3>

                    </div>

                </div>

                <div class="col-sm">

                    <div class="top-currency">

                        <h3 class="currency-price">&euro; {{ xrp }}</h3>
                        <h3 class="currency-name">Ripple in {{ valuta }}</h3>

                    </div>

                </div>

            </div>

            <div class="row mt-5">
                <div class="col-sm">
                    <a class="btn btn-ghost-blue">Bekijk de koers<i class="ion-chevron-right"></i></a>
                </div>
            </div>

        </div>

    </section>

</template>

<script>

import {mapState, mapMutations, mapActions} from 'vuex'

export default {

    name: 'topcurrencies',

    data() {
        return {


        }
    },

    computed: {

        ...mapState(['btc', 'eth', 'xrp', 'valuta']),

    },

    methods: {


    },

    created() {


    }

}
</script>

<style>

/* Top currencies section */

.top-currencies {
    padding-top: 80px;
    padding-bottom: 80px;
    text-align: center;
}

.top-currencies .top-currency .currency-price {
    font-family: 'Poppins', sans-serif;
    font-weight: 200;
    color: var(--brand);
    font-size: 48px;
}

.top-currencies .top-currency .currency-name {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 15px;
    color: var(--grey);
    letter-spacing: 0.1rem;
}

</style>
