<template>
  <div class="calendar-main">
    <nav class='calendar-nav'>
      <button v-on:click='prev'>←</button>
      <button v-on:click='next'>→</button>
    </nav>
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

.calendar-nav {
  display: flex;
}

.calendar-nav button {
  display: block;
  flex: 1 1;
  text-align: center;
  background: transparent;
  border: none;
}

.calendar-months {
  display: flex;
  flex-wrap: wrap;
}
</style>
