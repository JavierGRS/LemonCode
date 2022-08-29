<script setup lang="ts">
import { onErrorCaptured, ref } from 'vue';
import UserList from '../components/UserList.vue'

const error = ref('')

onErrorCaptured((errorCaptured) => {
  error.value = errorCaptured.message
})
</script>

<template>
  <h1>List of users</h1>
  <div v-if="error">Error {{ error }}</div>
  <Suspense v-if="!error">
    <template #default>
      <UserList></UserList>
    </template>
    <template #fallback>
      <div>Loading...</div>
    </template>

  </Suspense>
</template>