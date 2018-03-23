import Calendar from './components/Calendar';
import CalendarMonth from './components/CalendarMonth';
import CalendarDay from './components/CalendarDay';

export default {
    install(Vue) {
        Vue.component('calendar', Calendar);
        Vue.component('calendar-month', CalendarMonth);
        Vue.component('calendar-day', CalendarDay);
    },
};

export { Calendar, CalendarMonth, CalendarDay };
