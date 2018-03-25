<template>
  <div class="calendar-main">
    <header class='calendar-header'>
      <button v-on:click='prev'>←</button>
      <span>{{ years }}</span>
      <button v-on:click='next'>→</button>
    </header>
    <div class='calendar-months'>
      <calendar-month v-for='month in months'
                      :datetime='month.format("Y-MM")'
                      :key='month.format("Y-MM")'
                      :calendar-day-class-callback='calendarDayClassCallback'
                      :calendar-day-click-callback='calendarDayClickCallback'
                      :calendar-day-link-callback='calendarDayLinkCallback'
      ></calendar-month>
    </div>
  </div>
</template>

<script>
import CalendarMonth from "./CalendarMonth.vue";
import moment from "moment";

export default {
  props: [
    "displayMonths",
    "calendarDayClassCallback",
    "calendarDayClickCallback",
    "calendarDayLinkCallback"
  ],
  data: function() {
    return {
      months: []
    };
  },
  components: { CalendarMonth },
  computed: {
    firstDate: function() {
      return this.months[0];
    },
    monthsCount: function() {
      return parseInt(this.displayMonths) || 4;
    },
    years: function() {
      return this.months
        .map(m => m.format("Y"))
        .filter((m, i, a) => i === a.indexOf(m))
        .join(" / ");
    }
  },
  methods: {
    initializeMonths: function() {
      var month = moment().startOf("month");
      for (var i = this.monthsCount; i > 0; i--) {
        this.months.push(month);
        month = moment(month);
        month.add(1, "month");
      }
    },
    prev: function() {
      this.months.unshift(
        moment(this.months.pop()).subtract(this.displayMonths, "month")
      );
    },
    next: function() {
      this.months.push(this.months.shift().add(this.displayMonths, "month"));
    }
  },
  created: function() {
    this.initializeMonths();
  }
};
</script>

<style>
.calendar-main *,
.calendar-main *:before,
.calendar-main *:after {
  box-sizing: border-box;
}

.calendar-header {
  display: flex;
}

.calendar-header button {
  flex: 1 1;
}

.calendar-header * {
  display: block;
  flex: 3 3;
  text-align: center;
  background: transparent;
  border: none;
}

.calendar-months {
  display: flex;
  flex-wrap: wrap;
}
</style>
