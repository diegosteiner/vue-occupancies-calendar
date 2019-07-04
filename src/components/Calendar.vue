<template>
  <div class="calendar-main">
    <nav class="calendar-nav">
      <button @click.prevent="prev">{{ prevMonthLabel }}</button>
      <header>{{ years }}</header>
      <button @click.prevent="next">{{ nextMonthLabel }}</button>
    </nav>
    <div class="calendar-months">
      <calendar-month
        v-for="month in months"
        :datetime="month.format('Y-MM')"
        :key="month.format('Y-MM')"
        :locale="locale"
      >
        <template scope="date">
          <slot v-bind="date"></slot>
        </template>
      </calendar-month>
    </div>
    <nav class="calendar-nav">
      <button @click.prevent="prev">{{ prevMonthLabel }}</button>
      <footer></footer>
      <button @click.prevent="next">{{ nextMonthLabel }}</button>
    </nav>
  </div>
</template>

<script>
import CalendarMonth from "./CalendarMonth.vue";
import moment from "moment";

export default {
  components: { CalendarMonth },
  props: {
    displayMonths: {
      type: Number,
      default: 4
    },
    firstDate: {
      default: null
    },
    nextMonthLabel: {
      type: String,
      default: "→"
    },
    prevMonthLabel: {
      type: String,
      default: "←"
    },
    locale: {
      type: "String"
    }
  },
  data() {
    const firstDate = moment(this.firstDate)

    return {
      firstMonth: (firstDate.isValid() ? firstDate : moment()).startOf("month")
    };
  },
  computed: {
    years() {
      return [...new Set(this.months.map(m => m.year()))].join("/");
    },
    months() {
      const months = []
      for (let i = 0; i < this.displayMonths; i++) {
        months.push(moment(this.firstMonth).add(i, "month"));
      }
      return months
    }
  },
  methods: {
    prev() {
      this.firstMonth = moment(this.firstMonth).subtract(1, "month")
    },
    next() {
      this.firstMonth = moment(this.firstMonth).add(1, "month")
    }
  },
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
  font-size: 2rem;

  header,
  footer {
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
