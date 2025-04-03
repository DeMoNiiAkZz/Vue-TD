<script setup>
import { defineEmits, defineProps } from 'vue';

defineProps({
  message: String
});

const emit = defineEmits(['messageSent']);

const sendMessage = () => {
  emit('messageSent', 'Bonjour depuis Message.vue !'); 
};
</script>

<template>
  <div class="message-container">
    <h2>{{ message }}</h2>
    <button @click="sendMessage">Envoyer un message</button> 
  </div>
</template>

<style scoped>
.message-container h2 {
  color: blue;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #369f75;
}
</style>
