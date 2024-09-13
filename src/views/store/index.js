import { createStore } from 'vuex';
import music from './music';

const store = createStore({
    modules: {
        music, // 注册 music 模块
    },
});

export default store;