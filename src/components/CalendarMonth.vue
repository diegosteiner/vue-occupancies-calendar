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
export default {
  props: {
    datetime: String,
    freeze: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      firstDate: this.$moment(this.datetime, "Y-MM")
    }
  },
  computed: {
    datesToDisplay() {
      var date = this.$moment(this.firstDate);
      var dates = [];
      while (date.isSame(this.firstDate, "month")) {
        dates.push(date.clone());
        date.add(1, "day");
      }
      return dates;
    },
    weekdayNames() {
      const weekdays = this.$moment.weekdaysShort().slice(0);
      weekdays.push(weekdays.shift());
      return weekdays;
    },
    monthName() {
      return this.$moment(this.firstDate).format("MMMM Y");
    },
    monthStartsAfter() {
      return parseInt(this.firstDate.format("e"));
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
