<template>
  <div class="calendar-main">
    <nav class='calendar-nav'>
      <button v-on:click='prev'>← {{ labelPrev }}</button>
      <button v-on:click='next'>{{ labelNext }} →</button>
    </nav>
    <div class='calendar-months'>
      <calendar-month v-for='month in months'
                      :datetime='month.format("Y-MM")'
                      :key='month.format("Y-MM")'
      >
                        <template scope="date">
                          <slot v-bind="date"></slot>
                        </template>
      </calendar-month>
    </div>
    <nav class='calendar-nav'>
      <button v-on:click='prev'>← {{ labelPrev }}</button>
      <button v-on:click='next'>{{ labelNext }} →</button>
    </nav>
  </div>
</template>

<script>
import CalendarMonth from "./CalendarMonth.vue";
import moment, { isMoment } from "moment";

export default {
  props: ["displayMonths", "firstMonth"],
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
    labelNext: function() {
      return this.$t("next");
    },
    labelPrev: function() {
      return this.$t("prev");
    }
  },
  methods: {
    initializeMonths: function() {
      let month = moment(this.firstMonth).startOf("month");
      for (let i = this.monthsCount; i > 0; i--) {
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
