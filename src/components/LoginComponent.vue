<template>
    <div class="auth flex items-center">
        <div
            v-if="!isLoggedIn"
            class="auth__unlogged flex items-center gap-3.5"
        >
            <router-link
                to="/"
                @click="logIn()"
                class="font-medium py-2 px-4 text-lg rounded-md text-accent hover:border-2 hover:border-accent"
                >Логин</router-link
            >
            <router-link
                to="/"
                class="font-medium py-2 px-4 text-lg rounded-md text-accent hover:border-2 hover:border-accent"
                >Регистрация</router-link
            >
            <Select />
        </div>
        <div v-else class="auth__logged flex gap-4 items-center">
            <div class="auth__balance flex gap-2">
                <div
                    class="balance__item rounded-md flex gap-2 pl-1 py-1 pr-3 bg-pastel text-primary font-bold"
                >
                    <div class="balance__img py-1 px-1.5 bg-white rounded-md">
                        <img src="@/assets/btc.svg" alt="" />
                    </div>
                    19.4014039
                </div>
                <div
                    class="balance__item rounded-md flex gap-2 pl-1 py-1 pr-3 bg-pastel text-primary font-bold"
                >
                    <div class="balance__img py-1 px-1.5 bg-white rounded-md">
                        <img src="@/assets/usd.svg" alt="" />
                    </div>
                    39 289.32
                </div>
            </div>
            <div class="auth__notification">
                <img src="@/assets/bell.svg" alt="" />
            </div>
            <ProfileSettings />
        </div>
    </div>
</template>

<script>
import Select from './select-item.vue'
import ProfileSettings from './ProfileSettings.vue'
export default {
    components: { Select, ProfileSettings },
    computed: {
        isLoggedIn() {
            return this.$store.state.isLoggedIn
        },
    },
    methods: {
        logIn() {
            this.$store.commit('LOG_IN')
        },
    },
}
</script>

<style scoped></style>
