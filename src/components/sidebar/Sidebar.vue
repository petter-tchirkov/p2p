<template>
    <aside
        class="sidebar bg-primary min-h-screen w-[234px] pt-7 pl-7 pr-6 flex flex-col justify-between"
    >
        <div class="sidebar__content">
            <router-link to="/"
                ><img class="mb-7" src="@/assets/logo.svg" alt=""
            /></router-link>
            <SidebarLogged v-if="this.$store.state.isLoggedIn" />
            <SidebarUnlogged v-else />
        </div>
        <div class="sidebar__footer py-7">
            <router-link
                class="flex gap-3 items-center text-white font-normal hover:text-accent transition-all"
                to="/"
            >
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="10" cy="10" r="10" fill="white" />
                    <path
                        d="M9.06815 12.6285C9.07843 12.0168 9.14782 11.5337 9.27631 11.179C9.40481 10.8244 9.66694 10.4312 10.0627 9.99945L11.0727 8.95864C11.5044 8.47036 11.7203 7.9461 11.7203 7.38586C11.7203 6.84618 11.5789 6.42471 11.2963 6.12147C11.0136 5.81308 10.6024 5.65888 10.0627 5.65888C9.53844 5.65888 9.11698 5.79766 8.79831 6.07521C8.47964 6.35276 8.32031 6.72539 8.32031 7.19312H6.89401C6.90429 6.36047 7.19983 5.68972 7.78063 5.18088C8.36657 4.6669 9.12726 4.40991 10.0627 4.40991C11.0341 4.40991 11.7897 4.67204 12.3294 5.1963C12.8742 5.71542 13.1466 6.42985 13.1466 7.3396C13.1466 8.23907 12.7303 9.12568 11.8976 9.99945L11.0573 10.8321C10.682 11.2484 10.4944 11.8472 10.4944 12.6285H9.06815ZM9.00647 15.0724C9.00647 14.8411 9.07586 14.6484 9.21463 14.4942C9.35855 14.3349 9.56928 14.2552 9.84683 14.2552C10.1244 14.2552 10.3351 14.3349 10.479 14.4942C10.6229 14.6484 10.6949 14.8411 10.6949 15.0724C10.6949 15.3037 10.6229 15.4965 10.479 15.6507C10.3351 15.7997 10.1244 15.8742 9.84683 15.8742C9.56928 15.8742 9.35855 15.7997 9.21463 15.6507C9.07586 15.4965 9.00647 15.3037 9.00647 15.0724Z"
                        fill="#656AC5"
                    />
                </svg>
                ????????????
            </router-link>
        </div>
    </aside>
</template>

<script>
import SidebarUnlogged from './SidebarUnlogged.vue'
import SidebarLogged from './SidebarLogged.vue'
export default {
    components: {
        SidebarUnlogged,
        SidebarLogged,
    },
}
</script>

<style lang="scss" scoped></style>
