<template>
  <div class="calendar-month" v-once>
    <header>{{ monthName }}</header>
    <div class="calendar-days">
      <div v-for="weekday in weekdayNames" :key="weekday" class="calendar-weekday">{{ weekday }}</div>
      <div v-for="n in monthStartsAfter" :key="n" class="calendar-day spacer"></div>
      <time
        v-for="day in daysOfMonth"
        class="calendar-day"
        :date="day.toISOString()"
        :key="`day-${day.toISOString()}`"
      >
        <slot :date="day"></slot>
      </time>
    </div>
  </div>
</template>

<script>
import { eachDayOfInterval, startOfMonth, endOfMonth, startOfWeek, endOfWeek, getDay, getMonth } from 'date-fns'

export default {
  props: {
    datetime: Date,
    locale: Object,
  },
  computed: {
    daysOfMonth() {
      return eachDayOfInterval({ start: startOfMonth(this.datetime), end: endOfMonth(this.datetime) })
    },
    monthName() {
      return this.locale.months[getMonth(this.datetime)]
    },
    weekdayNames() {
      const weekdays = Array.from(this.locale.weekdays)
      weekdays.push(weekdays.shift())
      return weekdays
    },
    monthStartsAfter() {
      return (getDay(startOfMonth(this.datetime)) + 6) % 7
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
