<script setup>
import { ref } from "vue";

defineProps({
  msg: {
    type: String,
    required: true,
  },
  MonPrenom: {
    type: String,
    required: true,
  },
});

const count = ref(0);
const text = ref(false); 
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <h3>{{ MonPrenom }}</h3>
    
    
    <input @click="text = !text" type="submit" class="bouton2" value="Clique ici" />
    <p v-if="text">Bienvenue sur Vue.js 🎉</p>
    
    
    <input @click="count++" type="submit" class="bouton1" value="Explose le compteur !" />
    <p>Tu as cliqué {{ count }} fois sur le bouton !</p>
  </div>
</template>


<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  color: skyblue;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
  color: rgb(241, 241, 241);
}

.bouton1 {
  background: #3498db;
  background-image: -webkit-linear-gradient(top, #3498db, #2980b9);
  background-image: -moz-linear-gradient(top, #3498db, #2980b9);
  background-image: -ms-linear-gradient(top, #3498db, #2980b9);
  background-image: -o-linear-gradient(top, #3498db, #2980b9);
  background-image: linear-gradient(to bottom, #3498db, #2980b9);
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
}

.bouton1:hover {
  background: #3cb0fd;
  background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
  background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
  background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
  text-decoration: none;
}

.bouton2 {
  font-size: 15px;
  font-family: Arial;
  width: 140px;
  height: 50px;
  border-width: 1px;
  color: #fff;
  border-color: #18ab29;
  font-weight: bold;
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  text-shadow: 1px 1px 0px #2f6627;
  background: #44c767;
}

.bouton2:hover {
  background: #5cbf2a
}
</style>
