<template>
    <nav class="main-menu">
        <div class="inner">
            <ul class="main-nav">
                <nuxt-link
                    v-for="item in menuItems"
                    tag="li"
                    :key="item.id"
                    :to="{path: `/${item.url}`}"
                    exact-active-class="current-menu-item"
                    :class="[
                        item.classes,
                        {'menu-item-has-children': item.children !== undefined}
                    ]
                ">
                    <a v-html="item.title"></a>
                    <ul v-if="item.children">
                        <li v-for="subItem in item.children" :key="subItem.id">
                            <nuxt-link :to="{path: `/${subItem.url}`}" v-html="subItem.title"></nuxt-link>
                        </li>
                    </ul>
                </nuxt-link>
            </ul>
        </div>
    </nav>
</template>

<script>
import axios from 'axios';

const parseUrl = url => url.split('/').filter((item,index) => index > 2).join('/');

export default {
    created: function() {
        axios.get('http://amma-test.bigdropinc.net/wp-json/wp-api-menus/v2/menus/18')
        .then(responseData => {

            let menuList = responseData.data.items.map(menuItem => {
                let url = parseUrl(menuItem.url);
                return {
                    id: menuItem.id,
                    title: menuItem.title,
                    classes: menuItem.classes,
                    url: url,
                    children: menuItem.children === undefined ? undefined : menuItem.children.map(menuSubItem => {
                        let subUrl = parseUrl(menuSubItem.url);
                        return {
                            id: menuSubItem.id,
                            title: menuSubItem.title,
                            classes: menuSubItem.classes,
                            url: subUrl,
                        }
                    })
                }
            });

            this.$store.commit('setMenuData', responseData.data);
            this.$store.commit('setMenuList', menuList);
        })
    },
    computed: {
        menuItems () {
            return this.$store.getters.list
        }
    },
}
</script>
