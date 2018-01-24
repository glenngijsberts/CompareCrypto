<template>
  <div id="app">

    <Navigation />  

    <router-view></router-view>

    <BottomFooter />

  </div>
</template>

<script>

import Navigation from './components/Navigation.vue'
import BottomFooter from './components/Footer.vue'

export default {

  name: 'app',

  components: {
      Navigation,
      BottomFooter
  },

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

  --transparantDark: rgba(32, 67, 101, 0.2784313725490196);
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
    background-color: var(--transparantDark);
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
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23' fill-opacity='0.08'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
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
    background-color: var(--transparantDark);
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
