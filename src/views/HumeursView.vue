<script setup>
import { ref } from 'vue';
import HumeurItem from '../components/HumeurItem.vue';

const humeurSaisie = ref(''); //pour recuperer l'humeur saisi 
const listeHumeurs = ref([]); //stocker les humeurs dans un tableau afin de faire un for pour les afficher ensuite

const ajouterHumeur = () => {
    if (humeurSaisie.value.trim() !== '') { // on vérifie si le texte saisi n'est pas vide
        listeHumeurs.value.push(humeurSaisie.value); // si c'est pas vide on ajoute l'humeur
        humeurSaisie.value = '';  // on réinitialise le champs texte
    }
};

// fonction pour supprimer une humeur par son index
const supprimerHumeur = (index) => {
    listeHumeurs.value.splice(index, 1); // supprimer un seul élément à l'index donné
};


</script>

<template>
    <div class="container mt-5 vh-100">
        <h1>Les Humeurs</h1>

        <!-- champs de saisi d'humeur -->
        <input v-model="humeurSaisie" type="text" class="form-control mb-3" placeholder="Saisir une humeur " />

        <!-- bouton qui appel la fonction ajouterHumeur à l'event click -->
        <div class="text-center">
            <button @click="ajouterHumeur" class="btn btn-primary btn-lg w-50">Ajouter</button>
        </div>

        <div class="mt-5">

            <!-- message si aucune humeurn'est ajouté (liste vide) -->
            <div v-if="listeHumeurs.length === 0">
                <p>Aucune humeur pour l'instant.</p>
            </div>

            <!-- cas inverse on affiche les humeurs -->
            <div v-else>
                <h3>Voici vos humeurs :</h3>
                <ul class="list-group mt-4">
                    <li v-for="(humeur, index) in listeHumeurs" :key="index" class="list-unstyled" >
                        <HumeurItem :HumeurValue="humeur" @supprimer="supprimerHumeur(index)" />
                    </li>
                </ul>
            </div>
        </div>


    </div>
</template>

<style scoped>

</style>