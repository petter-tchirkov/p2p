<template>
    <div class="selltable">
        <table class="selltable__table w-full">
            <thead class="selltable__head pt-6 pb-2">
                <th class="text-sm pl-8 text-[#8C8C8C] text-left font-normal">
                    Пользователь
                </th>
                <th class="text-sm text-center text-[#8C8C8C] font-normal">
                    Сумма на продажу
                </th>
                <th class="text-sm pl-6 text-[#8C8C8C] text-left font-normal">
                    Рейтинг
                </th>
                <th class="text-sm pl-6 text-[#8C8C8C] text-left font-normal">
                    Репутация
                </th>
            </thead>
            <tbody class="selltable__body border-t border-t-pastel">
                <tr
                    v-for="user in users"
                    :key="user.index"
                    class="selltable__row border-b border-b-pastel"
                >
                    <td
                        class="selltable__user pl-8 py-2 flex items-center gap-3 border-r border-r-pastel"
                    >
                        <img
                            :src="user.img"
                            class="rounded-full w-7 h-7 object-cover"
                            alt=""
                        />
                        {{ user.name }}
                    </td>
                    <td
                        class="selltable__sum py-3 px-6 text-right self-center border-r border-r-pastel"
                    >
                        $ {{ user.sum }}
                    </td>
                    <td
                        class="selltable__rating py-3 border-r border-r-pastel flex gap-2 pl-6"
                    >
                        <img src="@/assets/star.svg" alt="" />{{
                            user.rating.number
                        }}
                        ({{ user.rating.votes }})
                    </td>
                    <td
                        class="selltable__rep py-3 flex gap-3 items-center pl-6"
                    >
                        <div
                            class="upvotes text-sm font-normal text-green-600 flex gap-1.5 items-center"
                        >
                            <img
                                class="w-3.5 h-3.5"
                                src="@/assets/upvote.svg"
                                alt=""
                            />
                            666
                        </div>
                        <div
                            class="downvotes text-sm font-normal text-red-600 flex gap-1.5 items-center"
                        >
                            <img
                                class="w-3.5 h-3.5"
                                src="@/assets/downvote.svg"
                                alt=""
                            />
                            32
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    components: 'Sell',
    methods: {
        ...mapActions(['getUsers']),
    },
    mounted() {
        this.getUsers()
    },
    computed: {
        users() {
            return this.$store.state.users
        },
    },
}
</script>

<style lang="scss" scoped>
.selltable {
    &__head,
    &__row {
        display: grid;
        grid-template-columns:
            minmax(770px, 1fr)
            minmax(157px, max-content)
            minmax(146px, max-content)
            minmax(134px, max-content);
    }
}
</style>
