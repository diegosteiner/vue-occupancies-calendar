<template>
  <div class="calendar-month">
    <header>{{ monthName }}</header>
    <div class="calendar-week">
      <span v-for="weekday in weekdayNames" :key="weekday">{{ weekday }}</span>
    </div>
    <div class="calendar-days">
      <div v-for="n in monthStartsAfter" :key="n" class="calendar-day spacer"></div>
      <div
        v-for="date in datesToDisplay"
        class="calendar-day"
        :date="date"
        :key="date.format('Y-MM-DD')"
      >
        <slot v-bind="date"></slot>
      </div>
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
  margin: 1rem;
  overflow: hidden;
  flex: 1 0;
  min-width: 182px;
  header {
    font-weight: bold;
    text-align: center;
    padding: 0.25rem 0;
  }

  .calendar-week {
    display: flex;

    span {
      flex: 0 0 14.28%;
      font-weight: bold;
      max-width: 14.28%;
      text-align: center;
      padding: 0.25rem;
    }
  }
}

.calendar-days {
  display: flex;
  flex-wrap: wrap;

  .calendar-day {
    flex: 0 0 14.28%;
    max-width: 14.28%;
    margin: 0;
  }

  button {
    text-align: center;
  }
}
</style>
