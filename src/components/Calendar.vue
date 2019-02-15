<template>
  <div class="calendar-main">
    <nav class="calendar-nav">
      <button @click.prevent="prev">← {{ $t("prev") }}</button>
      <header>{{ years }}</header>
      <button @click.prevent="next">{{ $t("next") }} →</button>
    </nav>
    <div class="calendar-months">
      <calendar-month
        v-for="month in months"
        :datetime="month.format('Y-MM')"
        :key="month.format('Y-MM')"
      >
        <template scope="date">
          <slot v-bind="date"></slot>
        </template>
      </calendar-month>
    </div>
    <nav class="calendar-nav">
      <button @click.prevent="prev">← {{ $t("prev") }}</button>
      <footer></footer>
      <button @click.prevent="next">{{ $t("next") }} →</button>
    </nav>
  </div>
</template>

<script>
import CalendarMonth from "./CalendarMonth.vue";
import moment from "moment";

export default {
  props: {
    displayMonths: {
      type: Number,
      default: 4
    },
    firstMonth: null
  },
  data: function() {
    return {
      months: () => {
        let month = moment(this.firstMonth);
        if (!month.isValid()) {
          month = moment();
        }
        month = month.startOf("month");
        for (let i = this.monthsCount; i > 0; i--) {
          this.months.push(month);
          month = moment(month);
          month.add(1, "month");
        }
      }
    };
  },
  components: { CalendarMonth },
  computed: {
    years() {
      return [...new Set(this.months.map(m => m.year()))].join("/");
    },
    firstDate: function() {
      return this.months[0];
    },
  },
  methods: {
    prev() {
      this.months.unshift(
        moment(this.months.pop()).subtract(this.displayMonths, "month")
      );
    },
    next() {
      this.months.push(this.months.shift().add(this.displayMonths, "month"));
    }
  }
};
</script>

<style lang="scss">
.calendar-main *,
.calendar-main *:before,
.calendar-main *:after {
  box-sizing: border-box;
}

.calendar-nav {
  display: flex;

  header {
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
  display: flex;
  flex-wrap: wrap;
}
</style>
