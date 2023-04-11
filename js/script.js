// Descrizione:
// Attraverso l'apposita API
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

const { createApp } = Vue;

createApp({
    data() {
        return {
            addressArray:[],
            numberEmail:10
        }
    },
    mounted(){                  //occorre per l'esercizio base affinche una volta venga richiamata la funzione nel metodo
        this.generateEmail()
    },
    methods: {
        generateEmail() {
            for (let i=0; i<this.numberEmail; i++){
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((resp) => {
                    console.log(resp.data.response);
                    this.addressArray.push(resp.data.response);
                });
            }
            console.log(this.addressArray);

        }
    }
}).mount('#app')