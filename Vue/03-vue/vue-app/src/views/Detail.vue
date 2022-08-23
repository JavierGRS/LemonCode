<template>
    <div class="user-container">
        <h1> User Details</h1>
        <Suspense>
            <UserDetail></UserDetail>
        </Suspense>
    </div>
</template>

<script lang="ts">
import { userService } from '@/services/users';
import type { User } from '@/types';
import { defineComponent } from 'vue'
import UserDetail from '../components/UserDetail.vue'

export default defineComponent({
    name: 'Detail',
    components: {
        UserDetail,
    },
    data: () => ({
        user: {} as User,
    }),
    computed: {
        id(): string {
            return String(this.$route.params.id)
        },
    },
    created() {
        userService.getUser(this.id).then((user: User | undefined) => {
            if (user) {
                this.user = user
            }
        })
    }
})
</script>

<style lang="scss" scoped>
.user-container {
    margin-left: 20px
}
</style>
