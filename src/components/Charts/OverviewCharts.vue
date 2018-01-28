<template>
  
    <div class="tabs-charts mt-5">

    <nav>
        <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
            <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Bitcoin</a>
            <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Ether</a>
            <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Ripple</a>
        </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"> Dit is bitcoin</div>
        <div class="tab-pane" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"> Dit is ether</div>
        <div class="tab-pane" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"> xrp </div>
    </div>

    </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

    .tabs-charts {
        max-width: 1000px;
        margin: 0px auto;

        box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);
        background-color: #FFFFFF;
        border-radius: 4px;
        border: 1px solid #DAE1E9;
        font-family: 'Rubik', sans-serif;

        .nav-tabs {

            .nav-link {
                color: darken(#DAE1E9, 25%);
                border: none;
                border-bottom: 2px solid #DAE1E9; 
                font-weight: 500;
                text-transform: uppercase;
                padding: 20px;
            }

        }

    }

    .nav-tabs .nav-link.active, .nav-tabs .nav-link:focus,  {
        color: var(--light);
        background-color: transparent;
        border: none;
        border-bottom: 2px solid var(--light);
    }

    .nav-tabs .nav-link:hover,  {
        border: none;
        border-bottom: 2px solid darken(#DAE1E9, 25%);
    }

    .tab-content {
        min-height: 400px;
        padding: 40px;
        color: darken(#DAE1E9, 25%);
    }   

</style>

