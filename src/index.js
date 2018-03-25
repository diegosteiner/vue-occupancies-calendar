import Calendar from './components/Calendar.vue';
import CalendarMonth from './components/CalendarMonth.vue';
import CalendarDay from './components/CalendarDay.vue';

export default {
    install(Vue) {
        Vue.component('calendar', Calendar);
        Vue.component('calendar-month', CalendarMonth);
        Vue.component('calendar-day', CalendarDay);
    },
};

export { Calendar, CalendarMonth, CalendarDay };
