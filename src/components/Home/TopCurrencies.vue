<template>
  
      <section class="top-currencies">

        <div class="container">
            <div class="row">

                <div class="col-sm">
                    <div class="top-currency">

                        <h3 class="currency-price">&euro; {{ this.returnValue(this.btc) }} </h3>
                        <h3 class="currency-name">Bitcoin in euro</h3>

                    </div>
                </div>

                <div class="col-sm">

                    <div class="top-currency">

                        <h3 class="currency-price">&euro; {{ this.returnValue(this.eth) }}</h3>
                        <h3 class="currency-name">Ether in euro</h3>

                    </div>

                </div>

                <div class="col-sm">

                    <div class="top-currency">

                        <h3 class="currency-price">&euro; {{ this.returnValue(this.xrp) }}</h3>
                        <h3 class="currency-name">Ripple in euro</h3>

                    </div>

                </div>

            </div>

            <div class="row mt-5">
                <div class="col-sm">
                    <a class="btn btn-ghost-blue">Bekijk de top 10<i class="ion-chevron-right"></i></a>
                </div>
            </div>

        </div>

    </section>

</template>

<script>
export default {

    name: 'topcurrencies',

    data() {
        return {

            btc: '',
            xrp: '',
            eth: ''

        }
    },

    methods: {

        returnValue(val) {
            if(val == '') {
                return 0;
            } else {
                return val
            }
        },

        call() {

            axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD,EUR')
                .then((response) => {
                
                this.btc = response.data.BTC.EUR;
                this.eth = response.data.ETH.EUR;
                this.xrp = response.data.XRP.EUR;
                
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
