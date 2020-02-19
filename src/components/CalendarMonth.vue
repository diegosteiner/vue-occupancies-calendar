<template>
  <div class="calendar-month" v-once>
    <header>{{ $d(datetime, { monthName: 'long'}) }}</header>
    <div class="calendar-days">
      <div v-for="weekday in weekdayNames" :key="weekday" class="calendar-weekday">{{ weekday }}</div>
      <div v-for="n in monthStartsAfter" :key="n" class="calendar-day spacer"></div>
      <time
        v-for="date in daysOfMonth"
        class="calendar-day"
        :date="date.toISOString()"
        :key="date.toISOString()"
      >
        <slot v-bind="date"></slot>
      </time>
    </div>
  </div>
</template>

<script>
import { eachDayOfInterval, startOfMonth, endOfMonth, startOfWeek, endOfWeek, getDay } from 'date-fns'

export default {
  props: {
    datetime: String,
  },
  computed: {
    daysOfMonth() {
      return eachDayOfInterval({ start: startOfMonth(this.datetime), end: endOfMonth(this.datetime) })
    },
    weekdayNames() {
      return eachDayOfInterval({ start: startOfWeek(this.datetime), end: endOfWeek(this.datetime) }).map(weekday => this.$d(weekday, { weekday: 'short'}))
    },
    monthStartsAfter() {
      return 7 - getDay(startOfMonth(this.datetime));
    }
  }
};
</script>

<style scoped lang="scss">
.calendar-month {
  header {
    font-weight: bold;
    text-align: center;
    padding: 0.25em 0;
  }

  .calendar-weekday {
    font-weight: bold;
    text-align: center;
    padding: 0.25em;
    font-size: 0.65em;
  }

  .calendar-days {
    display: grid;
    grid-template-columns: repeat(7, 2em);
    grid-template-rows: repeat(7, 2em);
    align-content: space-between;
    align-items: items;
    justify-content: space-between;
    grid-gap: 0.15em;

    button {
      text-align: center;
    }
  }
}
</style>
