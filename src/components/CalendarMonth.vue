<template>
  <div class="calendar-month" v-once>
    <header>{{ monthName }}</header>
    <div class="calendar-days">
      <div v-for="weekday in weekdayNames" :key="weekday" class="calendar-weekday">{{ weekday }}</div>
      <div v-for="n in monthStartsAfter" :key="n" class="calendar-day spacer"></div>
      <time
        v-for="date in datesToDisplay"
        class="calendar-day"
        :date="date.format('Y-MM-DD')"
        :key="date.format('Y-MM-DD')"
      >
        <slot v-bind="date"></slot>
      </time>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: {
    datetime: String,
    freeze: {
      type: Boolean,
      default: false,
    },
    locale: {
      default: 'de',
      type: String
    }
  },
  data() {
    return {
      firstDate: moment(this.datetime, "Y-MM")
    }
  },
  computed: {
    datesToDisplay: function() {
      var date = moment(this.firstDate);
      var dates = [];
      while (date.isSame(this.firstDate, "month")) {
        dates.push(moment(date));
        date.add(1, "day");
      }
      return dates;
    },
    weekdayNames: function() {
      moment.locale(this.locale);
      const weekdays = moment.weekdaysShort().slice(0);
      weekdays.push(weekdays.shift());
      return weekdays;
    },
    monthName: function() {
      moment.locale(this.locale);
      return moment(this.firstDate).format("MMMM Y");
    },
    monthStartsAfter: function() {
      return parseInt(this.firstDate.format("e"));
    }
  }
};
</script>

<style lang="scss">
.calendar-month {

  header {
    font-weight: bold;
    text-align: center;
    padding: 0.25rem 0;
  }

  .calendar-weekday {
    font-weight: bold;
      text-align: center;
      padding: 0.25rem;
  }

  .calendar-days {
    display: grid;
    grid-template-columns: repeat(7, 2rem);
    grid-template-rows: repeat(7, 2rem);
    align-content: space-between;
    justify-content: space-between;
    grid-gap: 1px;

    button {
      text-align: center;
    }
  }
}
</style>
