<template>
  
      <section class="calculate">

        <div class="container">

            <div class="row">
                <div class="col-sm">
                    <h2>Bereken cryptocurrencies</h2>
                </div>
            </div>

            <div class="row mt-5 align-items-center">
                <div class="col-sm-5">

                    <div class="input-group subscribe-group">
                        <div class="input-group-prepend">
                            <button class="btn btn-ghost-white dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ currency }}</button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" @click="setCurrency('Bitcoin')">Bitcoin</a>
                                <a class="dropdown-item" @click="setCurrency('Ether')">Ether</a>
                                <a class="dropdown-item" @click="setCurrency('Ripple')">Ripple</a>
                            </div>
                        </div>
                        <input type="number" class="form-control" v-model="inputCurrency" @keyup="resetZero" min="0">
                    </div>

                </div>
                <div class="col-sm-2">
                    <p class="to">Naar</p>
                </div>
                <div class="col-sm-5">

                    <div class="input-group subscribe-group">
                        <div class="input-group-prepend">
                            <button class="btn btn-ghost-white dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ valuta }}</button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" @click="setValuta('Euro')">Euro</a>
                                <a class="dropdown-item" @click="setValuta('Dollar')">Dollar</a>
                            </div>
                        </div>
                        <input type="number" class="form-control" :value="outputVal" disabled>
                    </div>

                </div>
            </div>

            <div class="row mt-5">
                <div class="col-sm">
                    <h3>{{ inputCurrency }} {{ currency }} is nu {{ outputVal }} {{ valuta }} waard</h3>
                </div>
            </div>

        </div>

    </section>

</template>

<script>

import {mapState, mapMutations, mapActions} from 'vuex'

export default {

    name: 'calculate',

    data() {
        return {

            inputCurrency: 0

        }
    },

    computed: {

        ...mapState(['valuta', 'currency']),

        outputVal() {

            let count = this.inputCurrency;
            let valuta = this.valuta;
            let currency = this.currency;

            let val;

            currency == 'Bitcoin' ? val = this.$store.state.btc : ''
            currency == 'Ether' ? val = this.$store.state.eth : ''
            currency == 'Ripple' ? val = this.$store.state.xrp : ''

            return count * val;

        }

    },

    methods: {

        ...mapActions(['setCurrency', 'setValuta']),

        resetZero() {
            if(this.inputCurrency == '') {
                return this.inputCurrency = 0;
            }
        }


    },

    created() {

    }

}
</script>

<style>

/* Calculate */

.calculate {
    padding-top: 40px;
    padding-bottom: 80px;
    text-align: center;
    background-color: #2f72af;
    background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232b3e4f' fill-opacity='0.06'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.calculate h2 {
    font-size: 18px;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: var(--second);
}

.calculate h3 {
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: var(--second);
}

.calculate .to {
    font-size: 16px;
    color: white;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
}

</style>
