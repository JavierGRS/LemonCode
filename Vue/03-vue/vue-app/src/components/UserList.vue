<template>
  <button @click="onClick">Search </button>
  <input type="text" v-model="store.state.keyword" />
  <div v-if="!userList"> Organisation not found</div>
  <ul class="user-list">
    <li v-for="user in userList" :key="user.id">
      <router-link :to="`/detail/${store.state.keyword}/${user.id}`">
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
import { defineComponent, inject, ref, type Ref } from 'vue'

export default defineComponent({
  name: 'UserList',
  async setup() {
    const userList: Ref<User[]> = ref([])
    const store: any = inject('store')
    userList.value = await userService.get(store.state.keyword)

    const onClick = async () => {
      // userList.value = await userService.get(keyWord.value)
      userList.value = await userService.get(store.state.keyword)
      console.log(userList.value)
    }

    return {
      store,
      userList,
      onClick,
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

