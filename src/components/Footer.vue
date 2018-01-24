<template>
  
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

</template>

<script>
export default {

    name: 'footer'

}
</script>

<style>

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

</style>
