import Bricks from './src/components/Bricks.vue';

const install = function (Vue) {
    Vue.mixin({
        components: {
            Bricks
        }
    });
};

const plugin = {
    install
};

let GlobalVue = null;

if (typeof window !== 'undefined') {
	GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
	GlobalVue = global.Vue;
}

if (GlobalVue) {
	GlobalVue.use(plugin);
}

export default {
    install,
    Bricks
};