<template>
  <div :datetime='datetime'
        v-on:click='handleClick'
        class='calendar-day'
        :class='handleClass'>{{ dayOfMonth }}</div>
</template>

<script>
export default {
  props: ["date", "calendarDayClassCallback", "calendarDayClickCallback"],
  methods: {
    handleClick() {
      this.$emit("dateSelected", this.date);
      if (this.calendarDayClickCallback !== undefined) {
        return this.calendarDayClickCallback(this.date);
      }
    }
  },
  computed: {
    handleClass() {
      if (this.calendarDayClassCallback !== undefined) {
        return this.calendarDayClassCallback(this.date);
      }
    },
    dayOfMonth() {
      return this.date.format("D");
    },
    datetime() {
      return this.date.format("Y-MM-DD");
    }
  }
};
</script>

<style>
.calendar-day {
  align-items: center;
  display: flex;
  flex-direction: column;
  flex: 0 0 14%;
  max-width: 14%;
  padding: 0.25rem;
  cursor: pointer;
  margin: 0;
}
.calendar-day.spacer {
  cursor: initial;
}
</style>
