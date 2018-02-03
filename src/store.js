export default {

    state: {

        btc: 0,
        eth: 0,
        xrp: 0,

        currency: 'Bitcoin',
        valuta: 'Euro',



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

            setInterval(() => {

                context.commit('call');

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