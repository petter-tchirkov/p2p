<template>
    <div class="auth relative pr-4 border border-accent rounded-md pl-2 py-2">
        <div
            class="auth__selected flex gap-1 items-center text-accent cursor-pointer select-none"
            @click.prevent="
                ;(areLangOptionsVisible = !areLangOptionsVisible), focusSelect()
            "
        >
            <img
                class="w-6 h-4"
                :src="`src/assets/${selectedLang.value}.svg`"
                alt=""
            />
            <span>{{ selectedLang.name }}</span>
            <img src="@/assets/arrow.svg" alt="" />
        </div>
        <transition>
            <div
                v-show="areLangOptionsVisible"
                tabindex="0"
                @focusout="handleFocusOut($event)"
                class="auth__options border border-accent rounded-md flex flex-col absolute top-11 right-0 w-full bg-white outline-none"
            >
                <div
                    @click="selectOption(lang)"
                    class="auth__option cursor-pointer flex gap-1 pr-4 pl-2 text-accent hover:bg-accent hover:text-white"
                    v-for="lang in langs"
                    :key="lang.index"
                >
                    <img
                        class="w-6 h-4"
                        :src="`src/assets/${lang.value}.svg`"
                        alt=""
                    />
                    <span>{{ lang.name }}</span>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            areLangOptionsVisible: false,
            langs: [
                {
                    name: 'Рус',
                    value: 'ru',
                },
                {
                    name: 'Укр',
                    value: 'ua',
                },
                {
                    name: 'Анг',
                    value: 'en',
                },
            ],
            selectedLang: {
                name: 'Рус',
                value: 'ru',
            },
        }
    },
    methods: {
        selectOption(lang) {
            this.selectedLang = { name: lang.name, value: lang.value }
        },
        focusSelect() {
            setTimeout(() => {
                document.querySelector('.auth__options').focus()
            }, 300)
        },
        handleFocusOut(e) {
            if (!e.currentTarget.contains(e.relatedTarget)) {
                this.areLangOptionsVisible = false
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.v-enter,
.v-leave-to {
    opacity: 0;
}
.v-enter-to,
.v-leave {
    opacity: 1;
}
</style>
