<template>
  <button @click="onClick">Search </button>
  <input type="text" v-model="keyWord" />
  <ul class="user-list">
    <li v-for="user in userList" :key="user.id">
      <router-link :to="`/detail/${keyWord}/${user.id}`">
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
    const keyWord: Ref<String> = ref("Lemoncode")
    console.log(await userService.get(keyWord.value))
    userList.value = await userService.get(keyWord.value)

    const onClick = async () => {
      userList.value = await userService.get(keyWord.value)
      console.log(userList.value)
    }

    return {
      userList,
      onClick,
      keyWord,
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

