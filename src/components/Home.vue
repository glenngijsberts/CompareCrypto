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
                                    <p>Op deze website zie je de top 10 cryptocurrencies die elk uur bijgewerkt wordt. Bekijk market cap, actuele prijzen en meer.</p>
                                    <a href="#"> Meer informatie
                                        <i class="ion-chevron-right"></i>
                                    </a>
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
                                    <p>Maak een account aan om je persoonlijke voorkeuren op te slaan en snel en gemakkelijk door te gaan</p>
                                    <a href="#"> Registreren
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
                                    <i class="ion-ios-flag-outline"></i>
                                </div>
                                <div class="col-sm-10">
                                    <h4>Alerts</h4>
                                    <p>Al een account? Ontvang een notificatie als een cryptocurrencie gunstig staat</p>
                                    <a href="#"> Inloggen
                                        <i class="ion-chevron-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </section>

        <Calculate />

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
