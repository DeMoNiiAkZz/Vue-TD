<script setup>
import { ref, reactive } from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import Message from './components/Message.vue';
import Child from './components/Child.vue';

const vHighlight = {
  mounted(el) {
        setTimeout(() => {
          el.style.color = 'green';
        }, 3000);
      }
}

const MessageRecu = (msg) => {
  alert(`Message reçu de Message.vue : ${msg}`);
};

const messageInputDisp = ref(""); 
const messageInput = ref(""); 

const afficherMessage = () => {
  messageInputDisp.value = "Le bouton a été cliqué ! 🎉";
};

const compteur = ref(0);
const compteurReactive = reactive({ value: 0 });

const incrementRef = () => compteur.value++;
const decrementRef = () => compteur.value--;

const incrementReactive = () => compteurReactive.value++;
const decrementReactive = () => compteurReactive.value--;

const taches = ref([]);
const nouvelleTache = ref("");

const addTache = () => {
  if (nouvelleTache.value.trim() !== "") {
    taches.value.push({ text: nouvelleTache.value, completed: false });
    nouvelleTache.value = "";
  }
};

const verifTache = (index) => {
  taches.value[index].completed = !taches.value[index].completed;
};

const retirerTache = (index) => {
  taches.value.splice(index, 1);
};

const enfantMessage = ref("Aucun message");

const enfantEvent = (msg) => {
  enfantMessage.value = msg;
};
</script>

<template>
  <header>
    <img alt="Vue logo" class="" src="./assets/logo.svg" width="125" height="125" />
    
    <div class="">
      <HelloWorld msg="Bienvenue sur Vue.js" MonPrenom="Enzo" />
    </div>
  </header>

  <main>
    <Message message="envoyer un message !" @messageSent="MessageRecu" />

    <button @click="afficherMessage">Clique ici</button>
    <p>{{ messageInputDisp }}</p>

    <input type="text" v-model="messageInput" placeholder="écrire un message ici" />
    <p>Vous écrivez : {{ messageInput }}</p>

    <div>
      <h3>Compteur ref() : {{ compteur }}</h3>
      <button @click="incrementRef">+1</button>
      <button @click="decrementRef">-1</button>
    </div>

    <div>
      <h3>Compteur avec reactive() : {{ compteurReactive.value }}</h3>
      <button @click="incrementReactive">+1</button>
      <button @click="decrementReactive">-1</button>
    </div>

    <div class="">
      <h3>Mes tâches</h3>
      <input v-model="nouvelleTache" placeholder="Ajouter une tâche..." />
      <button @click="addTache">Ajouter</button>

      <p v-if="taches.length === 0">Aucune tâche à afficher.</p>
      <p v-else>Voici vos tâches :</p>

      <ul>
        <li v-for="(task, index) in taches" :key="index" v-highlight>
          <span @click="verifTache(index)">
            {{ task.text }}
          </span>
          <button @click="verifTache(index)">
            {{ task.completed ? "Annuler" : "Terminé" }}
          </button>
          <button @click="retirerTache(index)">🗑</button>
        </li>
      </ul>
    </div>

    <Child @childEvent="enfantEvent" />
    <p>Message reçu de Child.vue : {{ enfantMessage }}</p>

  </main>
</template>

<style scoped>

</style>