<template>
  
    <select class="form-control valuta" :value="valuta" @change="setValuta()" id="valuta">
          <option v-for="(option, index) in options" :key="index" :value="option.value">
            {{ option.text }}
         </option>
    </select>

</template>

<script>

import {mapState, mapMutations, mapActions} from 'vuex'

export default {

    name: 'valuta',
    
    data() {
        return {
            options: [
                { text: 'Euro', value: 'Euro' },
                { text: 'Dollar', value: 'Dollar' },
            ]
        }
    },

    methods: {

          setValuta() {

              let val = document.getElementById('valuta').value;
              this.$store.dispatch('setValuta', val);
          }

    },

    computed: {
        
        ...mapState(['valuta'])

    }

}
</script>

<style>

</style>
