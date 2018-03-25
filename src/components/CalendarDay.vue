<template>
  <div :datetime='datetime'
        v-on:click='handleClick'
        class='calendar-day'
        :class='handleClass'>
        <a :href='handleLink()'>
        {{ dayOfMonth }}
        </a>
        </div>
</template>

<script>
export default {
  props: [
    "date",
    "calendarDayClassCallback",
    "calendarDayClickCallback",
    "calendarDayLinkCallback"
  ],
  methods: {
    handleClick() {
      this.$emit("dateSelected", this.date);
      if (this.calendarDayClickCallback !== undefined) {
        return this.calendarDayClickCallback(this.date);
      }
    },
    handleLink() {
      if (this.calendarDayLinkCallback !== undefined) {
        return this.calendarDayLinkCallback(this.date);
      }
      return "#";
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
