import Calendar from './components/Calendar.vue';
import CalendarMonth from './components/CalendarMonth.vue';

export default {
    install(Vue) {
        Vue.component('calendar', Calendar);
        Vue.component('calendar-month', CalendarMonth);
    },
};

export { Calendar, CalendarMonth };
