import Calendar from './components/Calendar';

export default {
    install(Vue) {
        Vue.component('calendar', Calendar);
    },
};

export { Calendar };
