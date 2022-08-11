<template>
    <div class="table-filter flex justify-between items-center">
        <button
            class="table-filter__btn flex text-accent items-center border border-accent rounded-md p-2"
        >
            <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="mr-1"
            >
                <path
                    d="M5.65685 -0.000115956V5.65674M5.65685 5.65674H11.3137M5.65685 5.65674V11.3136M5.65685 5.65674L-2.47269e-07 5.65674"
                    stroke="#747AE7"
                    stroke-width="2"
                />
            </svg>
            Создать объявление
            <svg
                width="11"
                height="7"
                viewBox="0 0 11 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="ml-1"
            >
                <path d="M0.5 1L5.5 6L10.5 0.999999" stroke="#747AE7" />
            </svg>
        </button>
        <div class="table-filter__filters filters flex items-center gap-8">
            <select name="sell" id="sell" class="text-accent font-medium">
                <option value="default" selected disabled>
                    Валюта покупки
                </option>
                <option value="btc">Bitcoin</option>
                <option value="usd">USD</option>
                <option value="uah">UAH</option>
                <option value="rub">RUB</option>
            </select>
            <select name="buy" id="buy" class="text-accent font-medium">
                <option value="default" selected disabled>
                    Валюта продажи
                </option>
                <option value="btc">Bitcoin</option>
                <option value="usd">USD</option>
                <option value="uah">UAH</option>
                <option value="rub">RUB</option>
            </select>
            <select name="sum" id="sum" class="text-accent font-medium">
                <option value="default" selected disabled>Сумма</option>
                <option value="btc">1-10</option>
                <option value="usd">10-50</option>
                <option value="uah">50+</option>
            </select>
            <button
                class="table-filter__btn flex text-accent items-center border border-accent rounded-md p-2"
            >
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="mr-1"
                >
                    <path
                        d="M5.65685 -0.000115956V5.65674M5.65685 5.65674H11.3137M5.65685 5.65674V11.3136M5.65685 5.65674L-2.47269e-07 5.65674"
                        stroke="#747AE7"
                        stroke-width="2"
                    />
                </svg>
                Фильтр
                <svg
                    width="11"
                    height="7"
                    viewBox="0 0 11 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="ml-1"
                >
                    <path d="M0.5 1L5.5 6L10.5 0.999999" stroke="#747AE7" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'table-filter',
}
</script>

<style lang="scss" scoped></style>
