export default {

    state: {

        btc: 0,
        eth: 0,
        xrp: 0,

        currency: 'Bitcoin',
        valuta: 'Euro',

    },

    mutations: {

        getValue(state) {

            axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD,EUR')
                .then((response) => {

                    state.btc = response.data.BTC.EUR;
                    state.eth = response.data.ETH.EUR;
                    state.xrp = response.data.XRP.EUR;

                })
                .catch(function (error) {
                    console.log(error);
                });

            setInterval(() => {

                axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=USD,EUR')
                    .then((response) => {

                        state.btc = response.data.BTC.EUR;
                        state.eth = response.data.ETH.EUR;
                        state.xrp = response.data.XRP.EUR;

                    })
                    .catch(function (error) {
                        console.log(error);
                    });

                console.log('fired');

            }, 120000);



        },

        setValuta(state, val) {

            state.valuta = val;

        },

        setCurrency(state, cur) {

            state.currency = cur;

        }

    }
    
}