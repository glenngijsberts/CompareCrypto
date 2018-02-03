export default {

    state: {

        btc: 0,
        eth: 0,
        xrp: 0,

        currency: 'Bitcoin',
        valuta: 'Euro',

        currencyChanges: {

            btc: {
                short: 0,
                long: 0
            },
            eth: {
                short: 0,
                long: 0
            },
            xrp: {
                short: 0,
                long: 0
            },

        }

    },

    mutations: {

        call(state) {

            var cur;

            state.valuta == 'Dollar' ? cur = 'USD' : cur = 'EUR' ;

            axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,XRP&tsyms=${cur}`)
                .then((response) => {

                    let res = cur;
                    
                    res == 'EUR' ? state.btc = response.data.BTC.EUR : state.btc = response.data.BTC.USD
                    res == 'EUR' ? state.eth = response.data.ETH.EUR : state.eth = response.data.ETH.USD
                    res == 'EUR' ? state.xrp = response.data.XRP.EUR : state.xrp = response.data.XRP.USD
    

                })
                .catch(function (error) {
                    console.log(error);
                });

        },

        getChanges(state) {

            axios.get(`https://api.coinmarketcap.com/v1/ticker/?limit=5`)
                .then((response) => {

                    state.currencyChanges.btc.short = response.data[0].percent_change_24h;
                    state.currencyChanges.btc.long = response.data[0].percent_change_7d;

                    state.currencyChanges.eth.short = response.data[1].percent_change_24h;
                    state.currencyChanges.eth.long = response.data[1].percent_change_7d;

                    state.currencyChanges.xrp.short = response.data[2].percent_change_24h;
                    state.currencyChanges.xrp.long = response.data[2].percent_change_7d;



                })
                .catch((error) => {
                    console.log(error);
                })

        },

        setValuta(state, val) {

            state.valuta = val;

        },

        setCurrency(state, cur) {

            state.currency = cur;

        }

    },

    actions: {

        getValue(context) {

            context.commit('call');
            context.commit('getChanges');

            setInterval(() => {

                context.commit('call');
                context.commit('getChanges');

                console.log('fired');

            }, 120000);

        },

        setValuta(context, val) {

            context.commit('setValuta', val);
            context.commit('call');

        },

        setCurrency(context, cur) {

            context.commit('setCurrency', cur);
            context.commit('call');

        }

    }
    
}