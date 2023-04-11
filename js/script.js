// Descrizione:
// Attraverso l'apposita API
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

const { createApp } = Vue;

createApp({
    data() {
        return {
            addressArray:[],
            numberEmail:10,
            clicked: false
        }
    },
    methods: {
        generateEmail() {           //?dopo 4 secondi dal click compariranno le email tutte assieme
            this.clicked = !this.clicked
            setTimeout(() => {
                for (let i=0; i<this.numberEmail; i++){
                    axios
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((resp) => {
                        console.log(resp.data.response);
                        this.addressArray.push(resp.data.response);
                    });
                }
                console.log(this.addressArray);
                
            }, 4000);
            
        }
    }
}).mount('#app')