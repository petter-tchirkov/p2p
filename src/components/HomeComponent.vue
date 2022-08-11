<template>
    <transition name="view">
        <main class="main">
            <table-filter class="table-filter pl-8 pr-4 py-3" />
            <SellTable class="mb-10" v-if="isSell" />
            <BuyTable class="mb-10" v-else />
            <div class="main__content pl-8">
                <h1 class="font-medium text-2xl">
                    Покупка и продажа валют без лимитов
                </h1>
                <p class="italic text-[#595959] text-sm mb-8">
                    Противоположная точка зрения подразумевает, что элементы
                    политического процесса набирают популярность среди
                    определенных слоев населения.
                </p>
                <h2 class="text-xl mb-3 font-medium">Покупка</h2>
                <p class="mb-8">
                    Вот вам яркий пример современных тенденций – экономическая
                    повестка сегодняшнего дня обеспечивает актуальность
                    поставленных обществом задач. С другой стороны,
                    высококачественный прототип будущего проекта способствует
                    повышению качества поэтапного и последовательного развития
                    общества.
                </p>
                <p class="mb-8">
                    В целом, конечно, сложившаяся структура организации
                    предполагает независимые способы реализации экономической
                    целесообразности принимаемых решений.
                </p>
                <h2 class="text-xl mb-3 font-medium">Продажа</h2>
                <p class="mb-32">
                    И нет сомнений, что представители современных социальных
                    резервов неоднозначны и будут превращены в посмешище, хотя
                    само их существование приносит несомненную пользу обществу.
                    Учитывая ключевые сценарии поведения, синтетическое
                    тестирование обеспечивает широкому кругу (специалистов)
                    участие в формировании переосмысления внешнеэкономических
                    политик. Но представители современных социальных резервов,
                    которые представляют собой яркий пример
                    континентально-европейского типа политической культуры,
                    будут представлены в исключительно положительном свете.
                    Равным образом, социально-экономическое развитие играет
                    важную роль в формировании существующих финансовых и
                    административных условий.
                </p>
            </div>
        </main>
    </transition>
</template>

<script>
import SellTable from './sell-table.vue'
import BuyTable from './BuyTable.vue'
import TableFilter from './table-filter.vue'
export default {
    components: { TableFilter, SellTable, BuyTable },
    computed: {
        isSell() {
            return this.$store.state.isSell
        },
    },
}
</script>

<style lang="scss" scoped>
.view-enter-active,
.view-leave-active {
    transition: opacity 0.5 ease-in-out, transform 0.5 ease;
}
.view-enter-active {
    transition-delay: 0.5s;
}
.view-enter,
.view-leave-to {
    opacity: 0;
}
.view-enter-to,
.view-leave {
    opacity: 1;
}
</style>
