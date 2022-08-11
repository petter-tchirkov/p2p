<template>
    <div class="sidebar__menu">
        <h3 class="text-lg text-white opacity-50 mb-5">Аккаунт</h3>
        <div class="sidebar__item mb-4">
            <router-link
                class="flex gap-3 items-center text-white hover:text-accent transition-all"
                to="/"
            >
                <img src="@/assets/bank.svg" alt="" />
                Счета
            </router-link>
        </div>
        <div class="sidebar__item mb-4">
            <router-link
                class="flex gap-3 items-center text-white hover:text-accent transition-all"
                to="/"
            >
                <img src="@/assets/settings.svg" alt="" />
                Настройки
            </router-link>
        </div>
        <div class="sidebar__item mb-8">
            <router-link
                class="flex gap-3 items-center text-white hover:text-accent transition-all"
                to="/"
            >
                <img src="@/assets/profile-white.svg" alt="" />
                Настройки
            </router-link>
        </div>
        <h3 class="text-lg text-white opacity-50 mb-5">Заявки</h3>
        <div class="sidebar__item mb-4 flex justify-between items-center">
            <router-link
                class="flex gap-3 items-center text-white hover:text-accent transition-all"
                to="/"
            >
                <img src="@/assets/bolt.svg" alt="" />
                Активные
            </router-link>
            <span class="text-white text-xs">329</span>
        </div>
        <div class="sidebar__item mb-4 flex justify-between items-center">
            <router-link
                class="flex gap-3 items-center text-white hover:text-accent transition-all"
                to="/"
            >
                <img src="@/assets/accepted.svg" alt="" />
                Принятые
            </router-link>
            <span class="text-white text-xs">431</span>
        </div>
        <div class="sidebar__item mb-8 flex justify-between items-center">
            <router-link
                class="flex gap-3 items-center text-white hover:text-accent transition-all"
                to="/"
            >
                <img src="@/assets/closed.svg" alt="" />
                Закрытые
            </router-link>
            <span class="text-white text-xs">1943</span>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
