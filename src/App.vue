<template>
    <div class="flex">
        <Sidebar />
        <div class="app w-full">
            <header
                class="header pl-8 flex justify-between h-14 border-b border-b-pastel"
            >
                <Header />
                <Login class="pr-4" />
            </header>
            <router-view />
            <Footer />
        </div>
    </div>
</template>

<script>
import Sidebar from './components/sidebar/Sidebar.vue'
import Header from './components/v-header.vue'
import Login from './components/LoginComponent.vue'
import Sell from './components/sell-table.vue'
import Footer from './components/v-footer.vue'
export default { components: { Sidebar, Header, Login, Sell, Footer } }
</script>

<style lang="scss" scoped></style>
