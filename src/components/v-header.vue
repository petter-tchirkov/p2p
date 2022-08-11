<template>
  <nav class="nav flex gap-6">
    <div
      class="nav__item flex items-center transition-all"
      :class="{
        'shadow-[inset_0px_-4px_0px_0px_#5156A6]': this.$store.state.isSell,
      }"
    >
      <button @click="switchTabs" class="text-primary text-xl font-medium">
        Продажа
      </button>
    </div>
    <div
      class="nav__item flex items-center transition-all"
      :class="{
        'shadow-[inset_0px_-4px_0px_0px_#5156A6]': !this.$store.state.isSell,
      }"
    >
      <button @click="switchTabs" class="text-primary text-xl font-medium">
        Покупка
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    switchTabs() {
      this.$store.commit("SWITCH_TABS");
    },
  },
};
</script>

<style lang="scss" scoped></style>
