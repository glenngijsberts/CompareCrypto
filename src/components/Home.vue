<template>

    <div>

        <header class="hero-home">

        <nav class="navbar navbar-expand-lg navbar-white p-3">

            <div class="container">

            <a class="navbar-brand" href="#">CRYPTOCOIN</a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                aria-label="Toggle navigation">
                <i class="ion-grid"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Grafieken</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Aanmelden</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Registreren</a>
                    </li>
                    <button class="btn btn-ghost-white my-2 my-sm-0" type="submit">Contact</button>
                </ul>
            </div>

            </div>

        </nav>

        <div class="home-hero">

            <h1 class="site-title">Digitale valuta's vergelijken</h1>

            <p class="site-description">Cryptocoin is dé tool om de grotere cryptocurrencies met elkaar te vergelijken, met óf zonder account!</p>

            <div class="subscribe-section">
                <div class="input-group subscribe-group mb-3">
                    <input type="text" class="form-control" placeholder="E-mailadres voor wekelijkse updates">
                    <div class="input-group-append">
                        <button class="btn btn-ghost-white" type="button">Inschrijven</button>
                    </div>
                </div>
                <a href="#" class="link">Wat zijn cryptocurrencies?</a>
            </div>

        </div>

    </header>

    <section class="top-currencies">

        <div class="container">
            <div class="row">

                <div class="col-sm">
                    <div class="top-currency">

                        <h3 class="currency-price">&euro;15000</h3>
                        <h3 class="currency-name">Bitcoin in euro</h3>

                    </div>
                </div>

                <div class="col-sm">

                    <div class="top-currency">

                        <h3 class="currency-price">&euro;1500</h3>
                        <h3 class="currency-name">Ether in euro</h3>

                    </div>

                </div>

                <div class="col-sm">

                    <div class="top-currency">

                        <h3 class="currency-price">&euro;500</h3>
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
                            <button class="btn btn-ghost-white dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Bitcoin</button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Bitcoin</a>
                                <a class="dropdown-item" href="#">Ether</a>
                                <a class="dropdown-item" href="#">Ripple</a>
                            </div>
                        </div>
                        <input type="number" class="form-control" placeholder="1">
                    </div>

                </div>
                <div class="col-sm-2">
                    <p class="to">Naar</p>
                </div>
                <div class="col-sm-5">

                    <div class="input-group subscribe-group">
                        <div class="input-group-prepend">
                            <button class="btn btn-ghost-white dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dollar</button>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Dollar</a>
                                <a class="dropdown-item" href="#">Euro</a>
                            </div>
                        </div>
                        <input type="number" class="form-control" aria-label="Text input with dropdown button" placeholder="15000">
                    </div>

                </div>
            </div>

            <div class="row mt-5">
                <div class="col-sm">
                    <h3>1 Bitcoin is nu 15000 dollar waard</h3>
                </div>
            </div>

        </div>

    </section>

    <footer>

        <div class="main-footer">

            <div class="container">
                <div class="row">

                    <div class="col-md-3">
                        <h4>Meer informatie</h4>
                        <ul>
                            <li><a href="#">Cryptocurrencies</a></li>
                            <li><a href="#">Bitcoin</a></li>
                            <li><a href="#">Welke portomonee</a></li>
                            <li><a href="#">Hoe koop ik cryptocurrencies</a></li>
                        </ul>
                    </div>

                    <div class="col-md-3">
                        <h4>Over ons</h4>
                        <ul>
                            <li><a href="#">Ontwikkelaar</a></li>
                            <li><a href="#">Doel</a></li>
                            <li><a href="#">Contactgegevens</a></li>
                            <li><a href="#">Zelf een app?</a></li>
                        </ul>
                    </div>

                    <div class="col-md-3">
                        <h4>Social Media</h4>
                        <ul>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Github</a></li>
                            <li><a href="#">LinkedIn</a></li>
                        </ul>
                    </div>

                    <div class="col-md-3">
                        <h4>Currency</h4>
                            <select id="inputState" class="form-control">
                                <option selected>Euro</option>
                                <option>Dollar</option>
                            </select>
                    </div>

                </div>
            </div>
        

        </div>

        <div class="copyright-footer">
            <p>Made with <i class="ion-heart"></i> by Glenn Gijsberts</p>
        </div>

    </footer>

    </div>

</template>

<script>
export default {

    name: 'home'

}
</script>

<style>

</style>
