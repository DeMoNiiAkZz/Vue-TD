<template>
    <div>
      <button @click="envoieMessage">Envoyer un message au parent</button>
    </div>
  </template>
  
  <script setup>
  const emit = defineEmits();
  
  const envoieMessage = () => {
    emit('childEvent', 'Message depuis l\'enfant');  
  };
  </script>