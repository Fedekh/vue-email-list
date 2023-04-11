// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const {createApp} = Vue;

createApp({
    data() {
      return {
         address:[]
      }
    },
    methods:{
        generateEmail(){
            axios
                  .get("https://flynn.boolean.careers/exercises/api/random/mail")
                  .then((resp) =>{
                    console.log(resp);
                    this.address.push(resp.data.response);
                    console.log(this.address);
                  })

        }
    }
  }).mount('#app')