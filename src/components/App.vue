<template>
  <calendar
    display-months='6'
    :calendar-day-class-callback='calendarDayClass'
    :calendar-day-click-callback='calendarDayClick'
  ></calendar>
</template>

<script>
import Calendar from "./Calendar.vue";
import moment from "moment";
import axios from "axios";

export default {
  props: ["displayMonths"],
  components: { Calendar },
  data: function() {
    return {
      occupancies: [
        {
          id: 1,
          begins_at: "2018-03-23T09:37:03.000Z",
          ends_at: "2018-03-30T09:37:03.000Z",
          blocking: false,
          campsite_id: 1,
          booking_id: 1,
          created_at: "2018-03-23T09:37:23.120Z",
          updated_at: "2018-03-23T09:37:23.120Z"
        }
      ]
    };
  },
  methods: {
    occupanciesOfDate(date) {
      return this.occupancies.filter(function(occupancy) {
        return date.isBetween(
          occupancy.begins_at,
          occupancy.ends_at,
          "hours",
          "()"
        );
      });
    },
    calendarDayClass(date) {
      return {
        occupied: this.occupanciesOfDate(date).some(occupancy => true)
      };
    },
    calendarDayClick: function(date) {
      alert(date);
    }
  },
  computed: {
    occupanciesUrl() {
      return this.$parent.$el.getAttribute("occupancies-url");
    }
  },
  created() {
    var vm = this;
    axios.get(this.occupanciesUrl).then(function(response) {
      vm.occupancies = response.data;
    });
  }
};
</script>

<style>
.calendar-day.spacer {
  cursor: initial;
}

.calendar-day {
  cursor: pointer;
}

.calendar-day.occupied {
  background-color: red;
}
</style>
