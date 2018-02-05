<template>
    <div class="no-dev">
        <div class="wrapper">
            <header class="header_">
                <div class="header-area">
                    <Logo />
                    <Menu />
                </div>
            </header>
            <div class="content">
                <nuxt/>
            </div>
        </div>
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue';
import Menu from '~/components/menu.vue';

export default {
    components: {
        Logo,
        Menu,
    },
}
</script>
