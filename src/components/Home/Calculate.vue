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
                            <button class="btn btn-ghost-white dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ selectedCurrency }}</button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" @click="setCurrency('Bitcoin')">Bitcoin</a>
                                <a class="dropdown-item" @click="setCurrency('Ether')">Ether</a>
                                <a class="dropdown-item" @click="setCurrency('Ripple')">Ripple</a>
                            </div>
                        </div>
                        <input type="number" class="form-control" v-model="inputCurrency" @change="calculate()">
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
                        <input type="number" class="form-control" v-model="outputVal" disabled>
                    </div>

                </div>
            </div>

            <div class="row mt-5">
                <div class="col-sm">
                    <h3>{{ inputCurrency }} {{ selectedCurrency }} is nu {{ outputVal }} {{ valuta }} waard</h3>
                </div>
            </div>

        </div>

    </section>

</template>

<script>
export default {

    name: 'calculate',

    data() {
        return {

            inputCurrency: 1,
            selectedCurrency: 'Bitcoin',
            outputVal: 9900,
            valuta: 'Euro',

            btcEur: '',
            ethEur: '',
            xrpEur: '',
            btcDol: '',
            ethDol: '',
            xrpDol: ''


        }
    },

    methods: {

        setValuta(val) {

            this.valuta = val;
            this.calculate();

        },
        setCurrency(cur) {

            this.selectedCurrency = cur;
            this.calculate();

        },

        calculate() {

            let count = this.inputCurrency;
            let valuta = this.valuta;

            let currency;

            this.selectedCurrency == 'Bitcoin' && this.valuta == 'Euro' ? currency = this.btcEur  : '';
            this.selectedCurrency == 'Bitcoin' && this.valuta == 'Dollar' ? currency = this.btcDol  : '';

            this.selectedCurrency == 'Ether' && this.valuta == 'Euro' ? currency = this.ethEur  : '';
            this.selectedCurrency == 'Ether' && this.valuta == 'Dollar' ? currency = this.ethDol  : '';

            this.selectedCurrency == 'Ripple' && this.valuta == 'Euro' ? currency = this.xrpEur  : '';
            this.selectedCurrency == 'Ripple' && this.valuta == 'Dollar' ? currency = this.xrpDol  : '';

            this.outputVal = count * currency;
            

        },

        call() {

            axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD,EUR')
                .then((response) => {
                
                this.btcEur = response.data.BTC.EUR;
                this.ethEur = response.data.ETH.EUR;
                this.xrpEur = response.data.XRP.EUR;
                this.btcDol = response.data.BTC.USD;
                this.ethDol = response.data.ETH.USD;
                this.xrpDol = response.data.XRP.USD;

                this.calculate();
                
                })
                .catch(function (error) {
                    console.log(error);
                });

        },

        getValue() {

            this.call();

            setInterval(() => {

                this.call();

                console.log('fired');

            }, 60000);

        }

    },

    created() {
        this.getValue();
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
