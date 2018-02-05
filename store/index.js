import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            list: []
        },
        mutations: {
            setMenuData(state, menuData) {
                state.data = menuData
            },
            setMenuList(state, menuList) {
                state.list = menuList
            }
        },
        getters: {
            list: state => {
                return state.list
            }
        }
    })
}

export default createStore
