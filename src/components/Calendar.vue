<template>
  <div class="calendar-main">
    <nav class="calendar-nav">
      <button @click.prevent="prev">{{ prevMonthLabel }}</button>
      <header>{{ years }}</header>
      <button @click.prevent="next">{{ nextMonthLabel }}</button>
    </nav>
    <div class="calendar-months">
      <calendar-month
        v-for="month in months"
        :datetime="month"
        :key="`month-${month.toISOString()}`"
      >
        <template slot-scope="date">
          <slot v-bind="date"></slot>
        </template>
      </calendar-month>
    </div>
    <nav class="calendar-nav">
      <button @click.prevent="prev">{{ prevMonthLabel }}</button>
      <footer></footer>
      <button @click.prevent="next">{{ nextMonthLabel }}</button>
    </nav>
  </div>
</template>

<script>
import CalendarMonth from "./CalendarMonth.vue";
import { eachMonthOfInterval, startOfMonth, parseISO, addMonths, subMonths, isValid, getYear } from 'date-fns'

export default {
  components: { CalendarMonth },
  props: {
    displayMonths: {
      type: Number,
      default: 4
    },
    firstDate: {
      default: null
    },
    nextMonthLabel: {
      type: String,
      default: "→"
    },
    prevMonthLabel: {
      type: String,
      default: "←"
    }
  },
  data() {
    const startOfCalendar = parseISO(this.firstDate)

    return {
      startOfCalendar: startOfMonth(isValid(startOfCalendar) ? startOfCalendar : new Date())
    };
  },
  computed: {
    years() {
      return [...new Set(this.months.map(m => getYear(m)))].join("/");
    },
    months() {
      return eachMonthOfInterval({ start: startOfMonth(this.startOfCalendar), end: addMonths(this.startOfCalendar, this.displayMonths)})
    }
  },
  methods: {
    prev() {
      this.startOfCalendar = subMonths(this.startOfCalendar, 1)
    },
    next() {
      this.startOfCalendar = addMonths(this.startOfCalendar, 1)
    }
  },
};
</script>

<style scoped lang="scss">
.calendar-main {
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  font-size: 1rem;
}

.calendar-nav {
  display: flex;
  font-size: 2em;

  header,
  footer {
    flex: 2 1;
    text-align: center;
  }

  button {
    display: block;
    flex: 1 1;
    text-align: center;
    background: transparent;
    border: none;
  }
}

.calendar-months {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14em, 15em));
  grid-template-rows: 17em;
  grid-gap: 1em;
  align-content: space-evenly;
  justify-content: space-evenly;
}
</style>
