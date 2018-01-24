<template>
  
    <nav class="navbar navbar-expand-lg navbar-white on-top p-3">

        <div class="container">

            <a class="navbar-brand" href="#">COMPARECRYPTO</a>

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
  
</template>

<script>
export default {

}
</script>

<style>

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

.navbar.on-top {
    position: absolute;
    width: 100%;
}

</style>
