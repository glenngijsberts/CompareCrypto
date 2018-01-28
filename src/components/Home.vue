<template>

    <div>

        <Hero />

        <TopCurrencies />

        <section class="about-crypto">
            
            <div class="container">
                
                <div class="row">
                    
                    <div class="col-sm">

                        <div class="content">
                            <div class="row">
                                <div class="col-sm-2">
                                    <i class="ion-ios-pie-outline"></i>
                                </div>
                                <div class="col-sm-10">
                                    <h4>Koers</h4>
                                    <p>Bekijk de koers van verschillende cryptocurrencies in zowel euro als dollar in de afgelopen tijd</p>
                                    <a href="#">Bekijk de koers
                                        <i class="ion-chevron-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div class="col-sm">

                        <div class="content">
                            <div class="row">
                                <div class="col-sm-2">
                                    <i class="ion-ios-pricetags-outline"></i>
                                </div>
                                <div class="col-sm-10">
                                    <h4>Top 10 Crypto</h4>
                                    <p>Wij willen ons gaan richten op de top 10 cryptocurrencies. Voor nu zijn de volgende currencies beschikbaar: Bitcoin, Ether,  Ripple.</p>
                                    <!-- <a href="#"> Meer informatie
                                        <i class="ion-chevron-right"></i>
                                    </a> -->
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div class="row">
                    
                    <div class="col-sm">

                        <div class="content">
                            <div class="row">
                                <div class="col-sm-2">
                                    <i class="ion-ios-home-outline"></i>
                                </div>
                                <div class="col-sm-10">
                                    <h4>Feels like home</h4>
                                    <p>Binnekort: Maak een account aan om je persoonlijke voorkeuren op te slaan en snel aan de slag te gaan</p>
                                    <a href="#calculate"> Binnekort beschikbaar!</a>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div class="col-sm">

                        <div class="content">
                            <div class="row">
                                <div class="col-sm-2">
                                    <i class="ion-ios-flag-outline"></i>
                                </div>
                                <div class="col-sm-10">
                                    <h4>Alerts</h4>
                                    <p>Binnekort: Maak een account aan om alerts te ontvangen wanneer een currencie een bepaalde waarde heeft</p>
                                    <a href="#"> Binnekort beschikbaar! </a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </section>

        <Calculate id="calculate" />

    </div>

</template>

<script>

import Hero from './Home/Hero.vue'
import Calculate from './Home/Calculate.vue'
import TopCurrencies from './Home/TopCurrencies.vue'

export default {

    name: 'home',
    components: {
        Hero,
        Calculate,
        TopCurrencies
    },

    methods: {

      log() {
          console.log(this.$route.path);
      }

    },

    created() {
      this.log();
    }

}
</script>

<style>

/* About */

.about-crypto {
    background-color: #fafafa;
    padding-top: 80px;
    padding-bottom: 80px;
    padding-left: 20px;
    padding-right: 20px;
}

.about-crypto .content {
    padding: 20px;
}

.about-crypto .content i {
    color: var(--light);
    font-size: 32px;
    position: relative;
    top: -10px;
}

.about-crypto .content h4 {
    text-transform: uppercase;
    color: var(--grey);
    letter-spacing: 0.1em;
    font-size: 14px;
}

.about-crypto .content p {
    color: var(--black);
}

.about-crypto .content a {
    font-size: 14px;
    color: var(--light);
}

.about-crypto .content a > i {
    position: relative;
    top: -1px;
    left: 10px;
    font-size: 10px;
    transition: 500ms all;
}

.about-crypto .content a:hover > i {
    left: 15px;
    transition: 500ms all;
}

.about-crypto .content a:hover {
    text-decoration: none;
}

</style>
