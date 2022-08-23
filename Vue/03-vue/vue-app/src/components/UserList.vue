<template>
  <ul class="user-list">
    <li v-for="user in userList" :key="user.id">
      <router-link :to="`/detail/${user.id}`">
        <div class="user-container-content">
          <p>
            <span class="grey-text">Name: </span>
            <strong>{{ user.login }}</strong>
          </p>
          <p>
            <span class="grey-text">Id: </span>
            <strong>{{ user.id }}</strong>
          </p>
        </div>
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { userService } from '@/services/users'
import type { User } from '@/types'
import { defineComponent, ref, type Ref } from 'vue'

export default defineComponent({
  name: 'UserList',
  async setup() {
    const userList: Ref<User[]> = ref([])
    userList.value = await userService.get()
    return {
      userList,
    }
  },
})
</script>

<style lang="scss" scoped>
.user-list {
  padding: 0;

  li {
    margin-bottom: 2em;
    width: 30%;
    text-decoration: none;
  }

  a {
    text-decoration: none;
  }

  a span {
    font-weight: bold;
    color: grey;
  }

  a strong {
    color: black
  }

}

.user-container-content {
  margin: 20px;
  border: 1px solid black;

  p {
    margin: 10px
  }
}
</style>

