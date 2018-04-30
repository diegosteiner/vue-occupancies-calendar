<template>
        <div class='calendar-month'>
          <header >{{ monthName }}</header>
          <div class='calendar-week'>
             <span v-for='weekday in weekdayNames' :key='weekday'>{{ weekday }}</span>
          </div>
          <div class='calendar-days'>
            <div v-for='n in monthStartsAfter' :key='n' class='calendar-day spacer'></div>
            <div v-for='date in datesToDisplay' class='calendar-day'
                          :date='date'
                          :key='date.format("Y-MM-DD")'
                          >
                            <slot v-bind="date"></slot>
                          </div>
          </div>
        </div>
</template>

<script>
import moment from "moment";

export default {
  props: ["datetime", "moment"],
  computed: {
    firstDate: function() {
      if (this.moment !== undefined) {
        return this.moment;
      }
      return moment(this.datetime, "Y-MM");
    },
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
      const weekdays = moment.weekdaysShort().slice(0);
      weekdays.push(weekdays.shift());
      return weekdays;
    },
    monthName: function() {
      return moment(this.firstDate).format("MMMM Y");
    },
    monthStartsAfter: function() {
      return parseInt(this.firstDate.format("e"));
    }
  }
};
</script>

<style>
.calendar-month {
  margin: 1rem;
  overflow: hidden;
  flex: 1 0;
  max-width: 400px;
  min-width: 195px;
}

.calendar-month header {
  font-weight: bold;
  text-align: center;
  padding: 0.25rem 0;
}

.calendar-month .calendar-week {
  display: flex;
}

.calendar-month .calendar-week span {
  flex: 0 0 14.28%;
  font-weight: bold;
  max-width: 14.28%;
  text-align: center;
  padding: 0.25rem;
}

.calendar-month .calendar-days {
  display: flex;
  flex-wrap: wrap;
}

.calendar-day {
  flex: 0 0 14.28%;
  max-width: 14.28%;
  cursor: pointer;
  margin: 0;
}

.calendar-day a {
  display: block;
  text-decoration: none;
  color: inherit;
  text-align: center;
}
.calendar-day.spacer {
  cursor: initial;
}
</style>
