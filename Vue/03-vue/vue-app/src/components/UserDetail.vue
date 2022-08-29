<template>
    <div class="grid-user">
        <div v-if="user">
            <div class="user-avatar">
                <h3>Avatar:</h3>
                <img :src="user.avatar_url" />
            </div>
            <div class="user-data">
                <h3>Id: </h3>
                <span>{{ user.id }} </span>
            </div>
            <div class="user-data">
                <h3>Name: </h3>
                <span>{{ user.login }} </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { userService } from '@/services/users'
import type { User } from '@/types'
import { defineComponent, ref, type Ref } from 'vue'

export default defineComponent({
    name: 'Detail',
    data: () => ({
        user: {} as User,
    }),
    computed: {
        id(): string {
            return String(this.$route.params.id)
        },
        organisation(): string {
            return String(this.$route.params.organisation)
        }
    },
    created() {
        console.log(this.id)
        userService.getUser(this.id, this.organisation).then((user: User | undefined) => {
            if (user) {
                this.user = user
            }
        })
    }
})
</script>

<style lang="scss" scoped>
.grid-user {
    margin-left: 10px;
}

.user-avatar img {
    border: 1px solid black;
    width: 10em;
}

.user-data span {
    color: grey;
    font-size: 20px;
}
</style>
