// Descrizione:
// Attraverso l'apposita API
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

const { createApp } = Vue;

createApp({
    data() {
        return {
            address:[],
            numberEmail:10
        }
    },mounted:{
        generateEmail
    },
    methods: {
        generateEmail() {
            for (let i=0; i<numberEmail-1; i++){
                axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((resp) => {
                    console.log(resp.data.response);
                    this.address.push(resp.data.response);
                    console.log(this.address);
                });
            }
        }
    }
}).mount('#app')