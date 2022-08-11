<template>
    <footer
        class="footer fixed w-[calc(100%-212px)] bg-white bottom-0 right-0 px-8 pt-5 pb-7 border-t border-t-pastel flex justify-between"
    >
        <div class="footer__links flex gap-6">
            <router-link class="text-accent text-md" to="/">О нас</router-link>
            <router-link class="text-accent text-md" to="/"
                >Пользовательское соглашение</router-link
            >
        </div>
        <div class="router__socials">
            <ul class="flex gap-6">
                <li>
                    <router-link to="/">
                        <img src="@/assets/fb.svg" alt="" />
                    </router-link>
                </li>
                <li>
                    <router-link to="/">
                        <img src="@/assets/ig.svg" alt="" />
                    </router-link>
                </li>
                <li>
                    <router-link to="/">
                        <img src="@/assets/yt.svg" alt="" />
                    </router-link>
                </li>
                <li>
                    <router-link to="/">
                        <img src="@/assets/tt.svg" alt="" />
                    </router-link>
                </li>
                <li>
                    <router-link to="/">
                        <img src="@/assets/ln.svg" alt="" />
                    </router-link>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
