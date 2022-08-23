<template>
  <h1>List of users</h1>
  <Suspense>
    <UserList></UserList>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UserList from '../components/UserList.vue'

export default defineComponent({
  name: 'Home',
  components: {
    UserList,
  },
})
</script>
