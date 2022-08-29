<script lang="ts">
import { provide } from "vue";
import { RouterView } from "vue-router";
import store from "@/store"

export default {
    setup() {
        provide('store', store)
    }
}
</script>

<template>
    <RouterView />
</template>
