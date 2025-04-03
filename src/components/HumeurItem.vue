<script setup>
import { defineProps, defineEmits } from 'vue';
import { vRecent } from '@/directives/vRecent'; 

defineProps({
  HumeurValue: {
    type: String,
    required: true,
  }
});

defineEmits(['supprimer']); 
</script>

<script>
export default {
  directives: {
    recent: vRecent, 
  }
};
</script>

<template>
  <div class="humeur-item">
    <div class="alert alert-warning d-flex justify-content-between align-items-center">
      <p class="mb-0" v-recent>{{ HumeurValue }}</p>
      <button @click="$emit('supprimer')" class="btn btn-danger btn-sm">Supprimer</button>
    </div>
  </div>
</template>

<style scoped></style>
