<template>
    <div class="relative">
        <div
            class="auth__photo"
            @click="
                ;(isProfileSettingsOpen = !isProfileSettingsOpen), focusSelect()
            "
        >
            <img
                class="w-9 h-9 object-cover rounded-full cursor-pointer"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd2Mx0_WZQQ_Qx0BNrUElg8DHzGrWSj2c1Fw&usqp=CAU"
                alt=""
            />
        </div>
        <div
            class="auth__settings absolute top-11 right-0 bg-white py-2 px-5 outline-none"
            v-if="isProfileSettingsOpen"
            tabindex="0"
            @focusout="handleFocusOut($event)"
        >
            <ul class="settings relative">
                <li class="flex gap-3 py-2 text-accent text-sm">
                    <img src="@/assets/profile.svg" alt="" />
                    <router-link to="/">Профиль</router-link>
                </li>
                <li class="flex gap-3 py-2 text-accent text-sm">
                    <img src="@/assets/lock.svg" alt="" />
                    <router-link to="/">Безопасность</router-link>
                </li>
                <li class="flex gap-3 py-2 text-accent text-sm">
                    <img src="@/assets/chat.svg" alt="" />
                    <router-link to="/">Чат</router-link>
                </li>
                <li
                    class="flex gap-3 py-2 text-red-600 text-sm"
                    @click="logIn()"
                >
                    <img src="@/assets/exit.svg" alt="" />
                    <router-link to="/">Выход</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isProfileSettingsOpen: false,
        }
    },
    methods: {
        logIn() {
            this.$store.commit('LOG_IN')
        },
        focusSelect() {
            setTimeout(() => {
                document.querySelector('.auth__settings').focus()
            }, 300)
        },
        handleFocusOut(e) {
            if (!e.currentTarget.contains(e.relatedTarget)) {
                this.isProfileSettingsOpen = false
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.auth {
    &__settings {
        box-shadow: (0px 2px 8px rgba(0, 0, 0, 0.15));
        .settings {
            &:after {
                content: '';
                position: absolute;
                width: 16px;
                top: -17px;
                right: -12px;
                height: 8px;
                background: #fff;
                clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
            }
        }
    }
}
</style>
