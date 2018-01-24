<template>
  <div id="app">

    <router-view></router-view>

  </div>
</template>

<script>
export default {

  name: 'app',

  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }

}
</script>

<style lang="scss">

@import url('https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css');
@import url('http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css');
@import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,700|Rubik:300,400,500,700');

:root {
  --brand: #2F72AF;
  --light: #59a4ec;
  --second: white;
  --grey: #787878;
  --lgrey: #c5c5c5;
  --black: #3e4552;
}

body {
    font-family: 'Poppins', sans-serif;
}

h1, h2, h3 {
    font-family: 'Rubik', sans-serif;
}

h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
}

a.link:hover {
    text-decoration: none;
}

p {
    font-size: 14px;
    line-height: 1.6;
    margin: 0;
    margin-bottom: .5rem;
}

::selection {
  background: var(--light);
}
::-moz-selection {
  background: var(--light);
}

/* assets */

button.btn.btn-ghost-white {
    font-size: 12px;
    color: var(--second);
    border: 1px solid var(--second);
    background-color: transparent;
    background-image: none;
}

div.input-group button.btn-ghost-white {
    color: var(--second);
    font-size: 16px;
    border: 2px solid var(--second);
}

div.input-group button.btn-ghost-white:hover {
    background-color: var(--brand);
    color: var(--second);
}

a.btn-ghost-blue, button.btn-ghost-blue {
    border: 2px solid var(--brand);
    color: var(--brand) !important;
    border-radius: 6px;
    background: none;
    text-transform: uppercase;
    -webkit-box-shadow: none;
    box-shadow: none;
    padding: 0.8rem 1.6rem;
    font-weight: 500;
    font-size: 12px;
}

a.btn-ghost-blue:hover {
    background-color: var(--brand);
    color: var(--second) !important;
}

a.btn-ghost-blue:hover i {
    left: 15px;
    transition: 500ms all;
}

a.btn i, button.btn i {
    font-size: 8px;
    position: relative;
    left: 10px;
    top: -1px;
    transition: 500ms all;
}

.subscribe-group {
    background-color: var(--light);
    padding: 30px 25px 30px 25px;
    border-radius: 10px;
    width: 100%;
    border: 1px solid var(--brand);
}

.subscribe-group input[type="text"], .subscribe-group input[type="number"] {
    padding: 0.9rem .75rem;
    font-size: 14px;
    color: var(--brand);
    border: 2px solid var(--second);
}

/* home hero */

header.hero-home {
    height: 100vh;
    background-color: var(--brand);
    // background: url(./img/bg-home.jpg) var(--brand);
    // background-repeat: no-repeat;
    // background-size: cover;
}

.home-hero {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 85%;
    padding: 10px;
}

.home-hero h1.site-title {
    text-transform: uppercase;
    color: var(--second);
    font-size: 54px;
    text-align: center;
    transition: 1s all;
}

.home-hero h1.site-title:hover {
    transform: scale(1.03);
    transition: 1s all;
}

.home-hero .site-description {
    color: var(--second);
    max-width: 500px;
    text-align: center;
    font-size: 14px;
    margin-top: 20px;
}

.home-hero .subscribe-section {
    margin-top: 20px;
    text-align: center; 
}

.home-hero .subscribe-section a.link {
    font-size: 12px;
    text-align: center;
    color: #ffffffb3;
}

.home-hero .subscribe-section a.link:hover {
    color: var(--second);
}

.home-hero .subscribe-section .subscribe-group {
    background-color: var(--light);
    padding: 30px 25px 30px 25px;
    border-radius: 10px;
    width: 100%;
    border: 1px solid var(--brand);
}

.home-hero .subscribe-section .subscribe-group input[type="text"] {
    padding: 0.9rem .75rem;
    font-size: 14px;
    color: var(--brand);
    border: 2px solid var(--second);
}

.home-hero .subscribe-section .subscribe-group input[type="text"]::selection {
    background: var(--light);
}

.home-hero .subscribe-section .subscribe-group input[type="text"]::placeholder {
    color: var(--light);
}

/* Navigation */

.navbar.navbar-white .navbar-brand {
    color: var(--second);
    font-weight: 700;
}

.navbar.navbar-white .navbar-nav > .active .nav-link {
    color: var(--light);
}

.navbar.navbar-white .navbar-nav .nav-link {
    color: var(--second);
    font-size: 12px;
    font-weight: 500;
}

.navbar.navbar-white .navbar-toggler {
    border: 2px solid var(--second);
}

.navbar.navbar-white .navbar-toggler > i {
    color: var(--second);
}

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

/* Calculate */

.calculate {
    padding-top: 40px;
    padding-bottom: 80px;
    text-align: center;
    background-color: var(--brand);
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

footer .main-footer {
    background-color: #fafafa;
    padding: 60px;
    border-top: 2px solid var(--light);
}

footer .main-footer h4 {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: var(--grey);
}

footer .main-footer ul {
    list-style: none;
    margin-left: -40px;
}

footer .main-footer ul li a {
    font-size: 12px;
    color: var(--grey);
}

footer .copyright-footer {
    padding: 20px;
    text-align: left;
    background-color: var(--second);
    border-top: 1px solid #f3f3f3;
}

footer .copyright-footer p {
    font-size: 10px;
    color: var(--brand);
    margin: 0;
    text-align: center;
}

@media (min-width: 992px) {
    .navbar-expand-lg .navbar-nav .nav-link {
        padding-right: 1rem;
        padding-left: 1rem;
    }

    .home-hero .subscribe-section .subscribe-group {
        width: 450px;
    }

}

@media (max-width: 768px) {
    .top-currencies .top-currency {
        margin-bottom: 20px;
    }
}
</style>
