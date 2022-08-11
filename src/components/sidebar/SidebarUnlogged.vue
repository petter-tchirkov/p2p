<template>
    <div class="sidebar__menu">
        <h3 class="text-lg text-white opacity-50 mb-5">Я хочу</h3>
        <div class="sidebar__item mb-4">
            <router-link
                class="flex gap-3 items-center text-white font-bold hover:text-accent transition-all"
                to="/"
            >
                <img src="@/assets/sell.svg" alt="" />
                Продать
            </router-link>
        </div>
        <div class="sidebar__item mb-4">
            <router-link
                class="flex gap-3 items-center text-white font-bold hover:text-accent transition-all"
                to="/"
            >
                <img src="@/assets/buy.svg" alt="" />
                Купить
            </router-link>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
